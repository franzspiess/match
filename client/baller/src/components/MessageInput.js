import React, {Component} from 'react';

class MessageInput extends Component {
  state = {
    msg:''
  }



  render () {

    const {post} = this.props;
    const {user} = this.props;


  return (

    <div className="inputbox">
      <input type="text" className="sendmsg" placeholder="Type your message" onChange={(e)=> this.setState({msg:e.target.value}) } value={this.state.msg}></input>
      <button className="sendbtn" onClick={(e) => {post(this.state.msg, user);this.setState({msg:''})}}>SEND</button>
    </div>

  )
  }






}



export default MessageInput;