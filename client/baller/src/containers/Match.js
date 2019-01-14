import React, { Component } from 'react';
import users from '../mocks/users';
import PotentialInfo from '../components/PotentialInfo';
import Decision from '../components/Decision';


class Match extends Component {





  render () {


    const { yes } = this.props;
    const { no } = this.props;


    if (this.props.potentials) {
      return (

        <div class="matchbox">

          <PotentialInfo  potentials={this.props.potentials} length={this.props.length} yes = {yes} no={no}/>
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