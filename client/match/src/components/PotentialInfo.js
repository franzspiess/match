import React, { Component } from 'react';
import { Card, CardWrapper } from 'react-swipeable-cards';
import infoimg from '../files/info2.svg';


class UserInfo extends Component {
  state = {
    show: false
  }

  click = () => {
    this.state.show ? this.setState({ show: false }) : this.setState({ show: true });
  }

  theEnd = () => {
    return (
      <div>
        <div className="logo">
          <span className="mylogo">MATCH</span>
          <span className="noplayers">No Players Near You</span>
        </div>
      </div>
    )
  };

  render () {
    const { potentials, yes, no } = this.props;
    const cards = potentials.map(user => {
      let skill = Array(Number(user.skill)).fill('🎾')
      let skillArr = skill.map(racket => {
        return (
          <img src='https://res.cloudinary.com/pinchepanchopincho/image/upload/v1547497115/styles/ball4.png' className="skillimg" alt="ball" ></img>
        )
      });

      const myStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundImage: `url(${user.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        alignSelf: 'center',
        width: '84%',
        height: '92%',
        marginTop: '2vh'
      }

      return (
        <Card style={myStyle} key={user._id} onSwipeRight={yes} onDoubleTap={yes} onSwipeLeft={no}>
          {this.state.show ? <div className="thedescription">
            <div className="sub-description">{user.description}</div>
            <div className="skillArr">
              <span className="theskill1">Skill Level:</span>
              <span className="theskill2">  {skillArr}</span>
            </div>
          </div> : null}
          <div className="userinfo">
            <div className="username">{user.first}, {user.age}</div>
            <div className="descriptiondiv">
              <img className="userdescription description-button" src={infoimg} onClick={this.click} alt="img"></img>
            </div>
          </div>
        </Card>
      )
    })

    if (potentials) {
      return (
        <div className="usercontainer">
          <CardWrapper className="wrapper" addEndCard={this.theEnd}>
            {cards}
          </CardWrapper>
        </div>
      );
    }
    else {
      return (
        <div>User not found!</div>
      );
    }
  };
}

export default UserInfo;

