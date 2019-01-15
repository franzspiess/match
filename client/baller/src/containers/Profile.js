import React, { Component } from 'react';
import { Redirect, Link } from '@reach/router'



class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: this.props.myUser.first,
      last: this.props.myUser.last,
      age: this.props.myUser.age,
      skill: this.props.myUser.skill,
      sport: this.props.myUser.sport,
      distance: this.props.myUser.distance/1000
    }

  }

  render () {

    if (!localStorage.getItem('token')) return <Redirect to="/" />
    else {

      return (


        <div className="profilebox">

          <div className="profile sport">
            <span className="title" >Sport:</span>
            <select className="value sport-input" name="carlist" form="carform" name="sport" onChange={e => this.setState({ sport: e.target.value })
            }>
              <option value="tennis">Tennis</option>
              <option value="tabletennis">Table-Tennis</option>
              <option value="badminton">Badminton</option>
              <option value="squash">Squash</option>
            </select>
          </div>
          <div className="profile first">
            <span className="title" >First Name:</span>
            <input className="value first-input" placeholder={this.state.first}
              onChange={(e) => this.setState({ first: e.target.value })} ></input>
          </div>
          <div className="profile last">
            <span className="title" >Last Name:</span>
            <input className="value last-input" placeholder={this.state.last} onChange={(e) => this.setState({ last: e.target.value })}></input>
          </div>
          <div className="profile age">
            <span className="title" >Age:</span>
            <input className="value age-input" placeholder={this.state.age} onChange={(e) => this.setState({ age: e.target.value })}></input>
          </div>
          <div className="profile skill">
            <span className="title" >Skill:</span>
            <div className="skilldiv">
              <span className="skilltitle">{this.state.skill} /5</span>
              <input type="range" className="value skill-input ranger" min="1" max="5" placeholder={this.state.skill + '/5'} onChange={(e) => this.setState({ skill: e.target.value })}></input></div>
          </div>
          <div className="profile distance">
            <span className="title" >Distance:</span>
            <div className="rangediv">
              <span className="rangetitle">{this.state.distance} km</span>
            <input type="range" className="value distance-input ranger" min="1" max="50" placeholder={this.state.distance} onChange={(e) => this.setState({ distance: e.target.value })}></input></div>
          </div>
          <button className="profile-button" onClick={(e) => this.props.updateUser(this.state)} >Change</button>

          <Link to="/" className="logout-button" onClick={this.props.logout}>LogOut</Link>


        </div>


      )


    }

  }


}

export default Profile;