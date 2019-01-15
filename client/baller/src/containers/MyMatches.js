import React, { Component } from 'react';
import Matched from '../components/Matched';
import Messages from '../components/Messages';

class MyMatches extends Component {





  componentDidMount () {

   this.props.fetchAndSet();

  }

  render () {

    console.log(this.props);

    const { matches } = this.props;




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