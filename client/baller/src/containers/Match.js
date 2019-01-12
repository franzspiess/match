import React, { Component } from 'react';
import users from '../mocks/users';
import PotentialInfo from '../components/PotentialInfo';
import Decision from '../components/Decision';


class Match extends Component {





  render () {

    const { currentPotential } = this.props;
    const { yes } = this.props;
    const { no } = this.props;


    if (currentPotential) {
      return (

        <div class="matchbox">

          <PotentialInfo currentPotential={currentPotential} />
          <Decision yes = {yes} no={no}/>

        </div>

      );

    }
    else return null;

  };
}

export default Match;

// getUsers = () => {

//   this.setState({users});

// }

// updateUser = () => {
//   if (this.state) {
//   const myUsers = this.state.users;
//   const user = myUsers.shift();
//   console.log(user,'u')
//   this.setState({...this.state,users: myUsers});
//   this.setState({...this.state,user})
//   console.log(this.state, 'u')

//   }
// }
 // fetch('http://localhost:3000/users/7')
    //   .then(result => result.json())
    //   .then(users => this.setState({ users }))
    //   .then(this.updateUser)