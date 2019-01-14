import React, { Component } from 'react';
import { Card, CardWrapper } from 'react-swipeable-cards';
import infoimg from '../files/info1.svg';


class UserInfo extends Component {
  state = {
    show: false
  }

  click = () => {
    this.state.show ? this.setState({ show: false }) : this.setState({ show: true });
  }




  render () {




    const { potentials } = this.props;
    const { length } = this.props;
    const { yes } = this.props;
    const { no } = this.props;

    console.log(oldLength, currentPotential, length);



    if (oldLength && currentPotential && length > oldLength) alert('hola');

    // const myStyle = {
    //   backgroundImage: `url(${user.img})`,
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
    //   backgroundRepeat: 'no-repeat',
    //   alignSelf: 'center'
    // }

    const wrapperStyle = {
      height: '60vh',
      width: '70vw'

    }
    const cardStyle = {

    }

    let oldLength = potentials.length;
    let currentPotential = potentials[0];

    console.log(oldLength)

    const cards = potentials.map(user => {
      // const describe = () => { return ()}
      console.log(user);
      let skill = Array(Number(user.skill)).fill('🎾').join('');
      const myStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        backgroundImage: `url(${user.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        alignSelf: 'center',
        justifyContent: 'space-between'
      }

      return (
        <Card style={myStyle} key={user.id} onSwipeRight={yes} onSwipeLeft={no}>
          {this.state.show ? <div className="thedescription">{user.description}</div> : null}
          <div className="userinfo">
            <div className="username">{user.first}, {user.age}</div><div className="descriptiondiv">
              <img className="userdescription description-button" src={infoimg} onClick={this.click}></img>
            </div>
            <div className="userskill">{skill}</div>
          </div>

        </Card>


      )
    })


    if (potentials) {

      // let skill = Array(Number(currentPotential.skill)).fill('🎾').join('');

      // console.log(skill);




      return (
        <div className="usercontainer">
          <CardWrapper className="wrapper">
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

