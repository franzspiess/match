import React, { Component } from 'react';
import { Router } from '@reach/router';
import Nav from './containers/Nav';
import Match from './containers/Match';
import Profile from './containers/Profile';
import MyMatches from './containers/MyMatches';
import Chat from './containers/Chat';
import Cards, {Card} from 'react-swipe-card';

import './App.css';

class App extends Component {

  state = {
    loading:true
  }

  postMsgToServer(msg, user) {
    let toPost = {
      msg,
      id: user.idid,
      chatID: user.chatID
    };
    fetch(`http://localhost:3000/msg/${this.state.myUser.idid}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(toPost) })
    .then((res) => console.log(res))
    .then(this.fetchAndSetMatches());



  }

  matchCurrentPotential() {
    console.log('called',this.state.myUser.idid);
    fetch(`http://localhost:3000/setmatch/${this.state.myUser.idid}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.state.currentPotential) })
      // .then(res => JSON.parse(res))
      .then(res => console.log(res))
      .then(() => {
        let potentials = this.state.potentials;
        let currentPotential = potentials.shift();
        this.setState({ potentials, currentPotential });
      })
      .then(this.fetchAndSetMatches());

  }

  declineCurrentPotential() {
    console.log('called',this.state.myUser.idid);
    fetch(`http://localhost:3000/setdecline/${this.state.myUser.idid}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.state.currentPotential) })
    .then(res => console.log(res))
    .then(() => {
      let potentials = this.state.potentials;
      let currentPotential = potentials.shift();
      this.setState({ potentials, currentPotential });
    })
      .then(this.fetchAndSetMatches());
  }



  fetchAndSetPotentials = () => {
    fetch('http://localhost:3000/potentials/7')
    .then(result => result.json())
    .then(potentials => {
      let currentPotential = potentials.shift();
      this.setState({ potentials, currentPotential });
      this.setState({loading:false});
      console.log(this.state);


    })

  }


  updateUser = (e) => {
    let profile = this.state.myUser;
    if (e.first.length) profile.first = e.first;
    if (e.last.length) profile.last = e.last;
    if (Number(e.age) >= 14 && Number(e.age) <= 100) profile.age = Number(e.age);
    if (Number(e.age) >= 1 && Number(e.age) <= 5) profile.last = Number(e.last);

    fetch('http://localhost:3000/myuser', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(profile) })
      .then((res) => console.log(res))
      .then(this.fetchAndSetPotentials());

  }

  fetchAndSetUser = () => {

    fetch('http://localhost:3000/myuser/7')
      .then(result => result.json())
      .then(myUser => this.setState({ myUser }))
  }

  fetchAndSetMatches = () => {
    fetch('http://localhost:3000/matches/7')
      .then(result => result.json())
      .then(matches => {

        this.setState({ matches});

      })
  }


  componentDidMount () {


    this.fetchAndSetUser();
    this.fetchAndSetMatches();
    this.fetchAndSetPotentials();


  }


  render () {

    if (!this.state.loading) {

      // if (!this.state.loading) {
        return (
          <div className="main container">

            <Nav />
            <Router>
              <Profile path="profile" myUser={this.state.myUser} updateUser={this.updateUser.bind(this)} />
              <Match path="/" currentPotential={this.state.currentPotential} yes={this.matchCurrentPotential.bind(this)} no={this.declineCurrentPotential.bind(this)} />
              <MyMatches path="mymatches" matches={this.state.matches} myUser={this.state.myUser} />
              <Chat path="mymatches/chatview/:userId" post={this.postMsgToServer.bind(this)}/>
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
