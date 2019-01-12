import React from 'react';
import Cards, { Card } from 'react-swipe-card';

const UserInfo = (props) => {


  const { currentPotential } = props;


  if (currentPotential) {

    let skill = Array(Number(currentPotential.skill)).fill('🎾').join('');

    console.log(skill);


    return (
      <div className="usercontainer">

          <img className="pic" src={currentPotential.img} alt="user"></img>




        <div className="userinfo">
          <div className="username">Name: {currentPotential.first}</div>
          <div className="userage">Age: {currentPotential.age}</div>
          <div className="userskill">{skill}</div>
        </div>

      </div>




    );
  }
  else {
    return (

      <div>User not found!</div>


    );

  }


}

export default UserInfo;

