import React, {Component} from 'react';


class MessageList extends Component {
  // state = {
  //   user: this.props.user
  // }

  // componentDidMount() {
  //   this.setState({user:this.props.user})
  // }



render () {

  let userID = this.props.user.idid
  let user = this.props.matches.find(x => x.idid == userID);
  const messages = user.messages;
  console.log(messages)
  const received = "received";
  const sent = "sent";
  let messageView = [];


  if (messages.length) {
    messageView = messages.map(message => {
      let tag;
      message.author === user.idid ? tag = received : tag = sent;
      // console.log(message, tag)
      return (
        <div className={`message ${tag}`}>{message.content}</div>
      )






    })
  }
  if (messageView && messageView.length) return (
    <div className="message-container">

      <div className="chatpartner">
        <img className="chatpic inchatpic" src={user.img} alt="matchpic"></img>
        <div className="partnername">{user.first}</div>
      </div>

      {messageView}
    </div>
  );
  else return (
    <div className="message-container">
      <div className="chatpartner">
        <img className="chatpic inchatpic" src={user.img} alt="matchpic"></img>
        <div className="partnername">{user.first}</div>
      </div>
    </div>
  )

}
}



export default MessageList;