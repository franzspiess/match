import React, { Component } from 'react';
import { Router } from '@reach/router';
import openSocket from 'socket.io-client';
import Nav from './containers/Nav';
import Match from './containers/Match';
import Profile from './containers/Profile';
import MyMatches from './containers/MyMatches';
import Chat from './containers/Chat';



import './App.css';

const url = 'https://private-0756c-match11.apiary-mock.com'
const urlAlt = 'http://localhost:3000'
const socket = openSocket(url);

class App extends Component {

  state = {
    loading: false,
    located: [],
    matches: [],
    potentials: [],
    myUser: {},
    newMatch: false
  }

  toggleNew = () => {
    this.setState({newMatch:false})
  }
  success = (located) => {
    const { latitude, longitude } = located.coords;
    this.setState({ located: [longitude, latitude] }, () => console.log('location', this.state.located));
  }

  create = (e) => {
    let user = e;
    navigator.geolocation.getCurrentPosition(this.success);
    user.located = this.state.located;

    fetch(`${url}/create`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(async res => {
        try {
          if (res.status === 401) { alert('User already exists') }
          else if (res.status === 401) { alert('Wrong password.') }
          else if (res.status === 201) {
            const myUser = await res.json();
            localStorage.setItem('token', myUser.token);
            localStorage.setItem('userID', myUser.idid)
            this.setState({ myUser });
          }
          else { alert('Unknown error') }
        }
        catch (err) { console.log(err) }
      })
      .then(this.fetchAndSetMatches)
      .then(this.fetchAndSetPotentials)
  }

  logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
    this.setState({});
  }

  login (e) {
    fetch(`${url}/login`, {
      method: 'get',
      headers: new Headers({
        'Authorization': 'Basic ' + btoa(`${e.email}:${e.password}`),
        'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    })
      .then(async res => {
        if (res.status === 404) alert('User not found')
        else if (res.status === 401) alert('Wrong password.')
        else if (res.status === 201) {
          const myUser = await res.json();
          this.setState({ myUser });
          localStorage.setItem('token', myUser.token);
          localStorage.setItem('userID', myUser.idid);
        }
      })
      .then(this.fetchAndSetMatches)
      .then(this.fetchAndSetPotentials);
  };

  postMsgToServer (msg, user) {
    socket.emit('sendmsg',msg);
    let toPost = {
      msg,
      id: user.idid,
      chatID: user.chatID
    };
    fetch(`${url}/msg/${this.state.myUser.idid}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(toPost) })
      .then(this.fetchAndSetMatches)
      .catch( error => console.log(error))
  };

  matchCurrentPotential () {
    console.log(this.state, 'BEFORE')
    let potentials = this.state.potentials;
    let currentPotential = potentials.shift();
    this.setState({ potentials, currentPotential })
    console.log(this.state, 'AFTER')
    // fetch(`${url}/setmatch/${this.state.myUser.idid}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.state.currentPotential) })
      // .then(this.fetchAndSetMatches)
      // .catch( error => console.log(error));
  };

  declineCurrentPotential () {
    console.log(this.state, 'BEFORE')
    // let potentials = this.state.potentials;
    // let currentPotential = potentials.shift();
    // this.setState({ potentials, currentPotential })
    console.log(this.state, 'AFTER')
    // fetch(`${url}/setdecline/${this.state.myUser.idid}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.state.currentPotential) })
      // .then(this.fetchAndSetMatches)
      // .catch( error => console.log(error));
  };

  fetchAndSetPotentials = () => {
    fetch(`${url}/potentials/7`, {headers: {
      'Access-Control-Allow-Credentials': true
    }})
      .then(result => result.json())
      .then(potentials => {
       let currentPotential = potentials[0];
        this.setState({ currentPotential, potentials });
        this.setState({ loading: false })
      })
      .catch(err => console.log(err));
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
    fetch(`${url}/myuser/7`, {headers: {
      'Access-Control-Allow-Credentials': true
    }})
      .then(result => result.json())
      .then(myUser => this.setState({ myUser }))
      .catch( error => console.log(error));
  }

  fetchAndSetMatches = () => {
    fetch(`${url}/matches/7`, {headers: {
      'Access-Control-Allow-Credentials': true
    }})
      .then(result => result.json())
      .then(matches => {
        if (this.state.matches.length && matches.length > this.state.matches.length) this.setState({newMatch:true})
        this.setState({ matches });
      })
  }

  showPosition = (position) => {
    return position.coords;
  }

  componentDidMount () {
    this.fetchAndSetUser();
    this.fetchAndSetMatches();
    this.fetchAndSetPotentials();
    // document.documentElement.requestFullscreen && document.documentElement.requestFullscreen();
  }

  render () {

    // if (!localStorage.getItem('token')) return (
    //   <div>
    //     <Router basepath={process.env.PUBLIC_URL}>
    //       <Login path="/" login={this.login.bind(this)} />
    //       <Create path="create" create={this.create} />
    //     </Router>
    //   </div>)

    if (!this.state.loading) {
      return (
        <div className="main-container">
          <Nav />
          <Router basepath={process.env.PUBLIC_URL}>
            <Profile path="/profile" myUser={this.state.myUser} updateUser={this.updateUser} logout={this.logout}/>
            <Match path="/" yes={this.matchCurrentPotential.bind(this)} no={this.declineCurrentPotential.bind(this)} potentials={this.state.potentials} newMatch={this.state.newMatch} toggleNew={this.toggleNew} currentPotential={this.state.currentPotential}/>
            <MyMatches path="/mymatches" matches={this.state.matches} myUser={this.state.myUser} fetchAndSet={this.fetchAndSetMatches}/>
            <Chat path="/mymatches/chatview/:userId" post={this.postMsgToServer.bind(this)} matches={this.state.matches} />
          </Router>
        </div>
      );
    }
    else return (<div className="loading">LOADING</div>);
  }
}

export default App;
