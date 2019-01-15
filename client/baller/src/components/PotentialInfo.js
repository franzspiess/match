import React, { Component } from 'react';
import { Card, CardWrapper } from 'react-swipeable-cards';
import infoimg from '../files/info2.svg';
import racketimg from '../files/racket1.svg';


class UserInfo extends Component {
  state = {
    show: false
  }

  click = () => {
    this.state.show ? this.setState({ show: false }) : this.setState({ show: true });
  }




  render () {





    const { potentials, yes, no, newMatch, currentPotential, toggleNew } = this.props;

    console.log(potentials)


    // const myStyle = {
    //   backgroundImage: `url(${user.img})`,
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
    //   backgroundRepeat: 'no-repeat',
    //   alignSelf: 'center'
    // }

    // const wrapperStyle = {
    //   height: '60vh',
    //   width: '70vw'

    // }




    const theEnd = () => {
      return (
        <div>
          <div className="logo">
          <span className="mylogo">MATCH</span>
           <span className="test">No Players Near You</span>
        </div>


        </div>
      )
    }





    // const endCard = () => {
    //   return (<div>TEST</div>)
    //   }


    const cards = potentials.map(user => {
      // const describe = () => { return ()}

      let skill = Array(Number(user.skill)).fill('🎾')

      let skillArr = skill.map(racket => {
        return (
          <img src='https://res.cloudinary.com/pinchepanchopincho/image/upload/v1547497115/styles/ball4.png' className="skillimg" ></img>
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
              <img className="userdescription description-button" src={infoimg} onClick={this.click}></img>
            </div>

          </div>

        </Card>


      )
    })


    if (potentials) {

      // let skill = Array(Number(currentPotential.skill)).fill('🎾').join('');

      // console.log(skill);




      return (
        <div className="usercontainer">
          <CardWrapper className="wrapper" addEndCard={theEnd}>
            {cards}
          </CardWrapper>
        </div>

        // <div className="usercontainer">
        //   <div className="pic" style={myStyle}>
        //     {/* <img  src={currentPotential.img} alt="user"></img> */}
        //   </div>




        //   <div className="userinfo">
        //     <div className="username">{currentPotential.first}, {currentPotential.age}</div>
        //     {/* <div className="userage"></div> */}
        //     <div className="userskill">{skill}</div>
        //   </div>

        // // </div>




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

