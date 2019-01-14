import React, { Component } from 'react';
import { Router } from '@reach/router';
import Nav from './containers/Nav';
import Match from './containers/Match';
import Profile from './containers/Profile';
import MyMatches from './containers/MyMatches';
import Chat from './containers/Chat';
import Login from './containers/LogIn';
import Create from './containers/Create';
import { Card, CardWrapper } from 'react-swipeable-cards';

import './App.css';
const url = 'http://192.168.1.207:3000'

class App extends Component {

  state = {
    loading: true
  }

  create = (e) => {
    let user = e;
    console.log(user);

    fetch(`${url}/create`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(async res => {
        if (res.status === 401) {alert('User already exists')}
        else if (res.status === 401) {alert('Wrong password.')}
        else if (res.status === 201) {
          const myUser = await res.json();
          console.log(myUser)
          this.setState({ myUser });
          localStorage.setItem('token', myUser.token);
          localStorage.setItem('userID', myUser.idid)
          console.log(this.state.myUser)
        }
        else {alert('Unknown error')}
      })
      .then(this.fetchAndSetMatches)
      .then(this.fetchAndSetPotentials);


  }

  logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
    this.setState({});
  }

  login (e) {
    console.log(e);
    fetch(`${url}/login`, {
      method: 'get',
      headers: new Headers({
        'Authorization': 'Basic ' + btoa(`${e.email}:${e.password}`),
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    })
      .then(async res => {
        if (res.status === 404) alert('User not found')
        else if (res.status === 401) alert('Wrong password.')
        else if (res.status === 201) {

          console.log(res)
          const myUser = await res.json();
          console.log(myUser)
          this.setState({ myUser });
          localStorage.setItem('token', myUser.token);
          localStorage.setItem('userID', myUser.idid)
          console.log(this.state.myUser)

        }
      });
  }


  postMsgToServer (msg, user) {
    let toPost = {
      msg,
      id: user.idid,
      chatID: user.chatID
    };
    fetch(`${url}/msg/${this.state.myUser.idid}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(toPost) })
      .then((res) => console.log(res))
      .then(this.fetchAndSetMatches);



  }

  matchCurrentPotential () {
    console.log('called', this.state.myUser.idid);
    let potentials = this.state.potentials;
    console.log(potentials);
    let currentPotential = potentials.shift();
    this.setState({ potentials, currentPotential })
    fetch(`${url}/setmatch/${this.state.myUser.idid}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.state.currentPotential) })
      // .then(res => JSON.parse(res))
      .then(res => console.log(res))
      .then(() => {
        let potentials = this.state.potentials;
        let currentPotential = potentials.shift();
        this.setState({ potentials, currentPotential });
      })
      .then(this.fetchAndSetMatches);

  }

  declineCurrentPotential () {
    console.log('called', this.state.myUser.idid);
    let potentials = this.state.potentials;
    let currentPotential = potentials.shift();
    this.setState({ potentials, currentPotential })
    fetch(`${url}/setdecline/${this.state.myUser.idid}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.state.currentPotential) })
      .then(res => console.log(res))
      .then(() => {
        let potentials = this.state.potentials;
        let currentPotential = potentials.shift();
        this.setState({ potentials, currentPotential });
      })
      .then(this.fetchAndSetMatches);
  }



  fetchAndSetPotentials = () => {
    fetch(`${url}/potentials/7`)
      .then(result => result.json())
      .then(potentials => {
        let currentPotential = potentials[0];
        this.setState({ potentials, currentPotential });
        this.setState({ loading: false });
        console.log(this.state, 'end');


      })

  }


  updateUser = (e) => {
    let profile = this.state.myUser;
    if (e.first.length) profile.first = e.first;
    if (e.last.length) profile.last = e.last;
    if (Number(e.age) >= 14 && Number(e.age) <= 100) profile.age = Number(e.age);
    if (Number(e.age) >= 1 && Number(e.age) <= 5) profile.last = Number(e.last);
    profile.sport = e.sport;

    fetch(`${url}/myuser/${profile.idid}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(profile) })
      .then((res) => console.log(res))
      .then(this.fetchAndSetUser)
      .then(this.fetchAndSetPotentials);

  }

  fetchAndSetUser = () => {

    fetch(`${url}/myuser/7`)
      .then(result => result.json())
      .then(myUser => this.setState({ myUser }))
  }

  fetchAndSetMatches = () => {
    fetch(`${url}/matches/7`)
      .then(result => result.json())
      .then(matches => {
        console.log(matches);
        // if (this.state && this.state.matches) matches.length > this.state.matches.length && alert('a');


        this.setState({ matches });

      })
  }


  componentDidMount () {


    this.fetchAndSetUser();
    this.fetchAndSetMatches();
    this.fetchAndSetPotentials();


  }


  render () {

    console.log(this.state)

    if (localStorage.getItem('token')) return (
      <div>

        <Router>
          <Login  path="/" login={this.login.bind(this)} />
          <Create path="create" create={this.create} />
        </Router>
      </div>
    )

    if (!this.state.loading) {

      // if (!this.state.loading) {
      return (
        <div className="main-container">

          <Nav />
          <Router>
            <Create path="create" create />
            <Profile path="profile" myUser={this.state.myUser} updateUser={this.updateUser.bind(this)} logout={this.logout} />
            <Match path="/" yes={this.matchCurrentPotential.bind(this)} no={this.declineCurrentPotential.bind(this)} potentials={this.state.potentials} length={this.state.matches.length} />
            <MyMatches path="mymatches" matches={this.state.matches} myUser={this.state.myUser} />
            <Chat path="mymatches/chatview/:userId" post={this.postMsgToServer.bind(this)} matches={this.state.matches} />
          </Router>


        </div>



      );
      // }
      // else return (<div>Loading</div>);
    }

    else return (<div class="loading">LOADING</div>);
  }
}

export default App;

// function PleaseLogin(props) {
//   if (!userIsLoggedIn) {
//     return <Redirect to="/login" />
//   }
//   return props.children;
// }

// <PleaseLogin>
//   <h1>Privat!!</h1>
//   <h1>Privat!!</h1>
//   <h1>Privat!!</h1>
//   <h1>Privat!!</h1>
// </PleaseLogin>
