import React, { Component } from 'react';
import { Link } from '@reach/router';
import ballimg from '../files/ball4.png';
import chatimg from '../files/chat3.svg';
import profile from '../mocks/profile';

class Nav extends Component {

  render () {

    const myStyle = {
      backgroundImage: `url(${profile.img})`
    }

    return (
      <div className="navbar">
        <Link to={process.env.PUBLIC_URL + "/profile"}>
          <div className="navbutton button profilpic" style={myStyle} alt="user"></div>
        </Link>
        <Link to={process.env.PUBLIC_URL + "/"}>
          <img className="navbutton navmatch" src={ballimg} alt="matching"></img>
        </Link>
        <Link to={process.env.PUBLIC_URL + "/mymatches"}>
          <img className="navbutton" src={chatimg} alt="chat"></img>
        </Link>
      </div>
    );
  }
};

export default Nav;