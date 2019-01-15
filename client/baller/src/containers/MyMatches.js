import React, { Component } from 'react';
import Matched from '../components/Matched';
import Messages from '../components/Messages';

class MyMatches extends Component {

  constructor(props) {
    super(props)
  }





  // componentDidMount () {

  //   fetch('http://localhost:3000/matches/7')
  //     .then(result => result.json())
  //     .then(matches => this.setState({ matches }))

  // }

  render () {
    console.log(this.props);

    const {matches} = this.props;




    if (this.props) {


      return (
        <div className="chatview">
          <Matched matches={matches} />
          <Messages matches={matches} />
        </div>
      )
    }
    else return null;



  }





}

export default MyMatches;