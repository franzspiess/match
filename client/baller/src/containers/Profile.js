import React, { Component } from 'react';
import profile from '../mocks/profile';



class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: this.props.myUser.first,
      last: this.props.myUser.last,
      age: this.props.myUser.age,
      skill: this.props.myUser.skill
    }

  }

  render () {
    console.log(this.state);




    return (

      <div className="profilebox">
        <div className="profile first">
          <span className="title" >First Name:</span>
          <input className="value" placeholder={this.state.first}
            onChange={(e) => this.setState({ first: e.target.value })} ></input>
        </div>
        <div className="profile last">
          <span className="title" >Last Name:</span>
          <input className="value" placeholder={this.state.last} onChange={(e) => this.setState({ last: e.target.value })}></input>
        </div>
        <div className="profile age">
          <span className="title" >Age:</span>
          <input className="value" placeholder={this.state.age} onChange={(e) => this.setState({ age: e.target.value })}></input>
        </div>
        <div className="profile skill">
          <span className="title" >Skill:</span>
          <input className="value" placeholder={this.state.skill + '/5'} onChange={(e) => this.setState({ skill: e.target.value })}></input>

        </div>
        <button className="profile button" onClick={(e) => this.props.updateUser(this.state)} >Change</button>


      </div>


    )




  }


}

export default Profile;