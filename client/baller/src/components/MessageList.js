import React, {Component} from 'react';
import { throws } from 'assert';

class MessageList extends Component {
  state = {
    user: this.props.user
  }

  component

render () {

  const messages = this.state.user.messages;
  // const
  const received = "received";
  const sent = "sent";
  let messageView = [];
  console.log(this.state.user);

  if (messages.length) {
    messageView = messages.map(message => {
      let tag;
      message.author === this.state.user.idid ? tag = received : tag = sent;
      console.log(message, tag)
      return (
        <div className={`message ${tag}`}>{message.content}</div>
      )






    })
  }
  if (messageView && messageView.length) return (
    <div className="message-container">

      <div className="chatpartner">
        <img className="chatpic inchatpic" src={this.state.user.img} alt="matchpic"></img>
        <div className="partnername">{this.state.user.first}</div>
      </div>

      {messageView}
    </div>
  );
  else return (
    <div className="message-container">
      <div className="chatpartner">
        <img className="chatpic inchatpic" src={this.state.user.img} alt="matchpic"></img>
        <div className="partnername">{this.state.user.first}</div>
      </div>
    </div>
  )

}
}



export default MessageList;