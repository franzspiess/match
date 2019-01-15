import React, { Component } from 'react';
import PotentialInfo from '../components/PotentialInfo';
import Decision from '../components/Decision';
import { Link } from '@reach/router';


class Match extends Component {


  render () {
    const { yes, no, newMatch, currentPotential, toggleNew } = this.props;







    console.log(currentPotential)

    if (newMatch && currentPotential) {

      const theStyle = {
        backgroundImage: `url(${currentPotential.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '30vh',
        width: '30vh',
        borderRadius: '100%',
        marginBottom: '3vh'

      }

      return (
        <div className="newmatch-box">
          <div className="newmatch-data">
            <div className="newmatch-notify">You've got a new</div>
            <div className="newmatch-logo">MATCH</div>
            <div className="newmatch-pic" style={theStyle}></div>
            <div className="newmatch-info">{currentPotential.first}, {currentPotential.age}</div>
          </div>
          <div className="newmatch-buttons">
            <Link to={`mymatches`} onClick={toggleNew} >
              <div className="newmatch-btn" >SEND MESSAGE</div>
            </Link>
            <div className="newmatch-btn" onClick={toggleNew}>KEEP SWIPING</div>
          </div>
        </div>
      )
    }

    else if (!this.newMatch && this.props.potentials) {
      return (

        <div className="matchbox">

          <PotentialInfo potentials={this.props.potentials} yes={yes} no={no} />
          <Decision yes={yes} no={no} />

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