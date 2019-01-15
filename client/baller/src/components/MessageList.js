import React, { Component } from 'react';
import infoimg from '../files/info2.svg';


class MessageList extends Component {
  state = {
    show: false,
    showPic: false
  }

  click = () => {
    this.state.show ? this.setState({ show: false }) : this.setState({ show: true, showPic: false });
  }

  clickPic = () => {
    this.state.showPic ? this.setState({ showPic: false }) : this.setState({ showPic: true, show: false });

  }

  // state = {
  //   user: this.props.user
  // }

  // componentDidMount() {
  //   this.setState({user:this.props.user})
  // }



  render () {

    let userID = this.props.user.idid
    let user = this.props.matches.find(x => x.idid === userID);
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
          <div className="sub-partner">
            <img className="chatpic inchatpic" src={user.img} alt="matchpic" onClick></img>
            <div className="partnername">{user.first}, {user.age}</div>
          </div>
          <img className="chatdescription" src={infoimg} onClick={this.click}></img>
        </div>
        {this.state.show ? <div className="description-box-chat">{user.description}</div> :
          <div className="the-message-list">{messageView}</div>}


      </div>
    );
    else return (
      <div className="message-container">
        <div className="chatpartner">
          <div className="sub-partner">
            <img className="chatpic inchatpic" src={user.img} alt="matchpic" onClick={this.clickPic}></img>
            <div className="partnername">{user.first}, {user.age}</div>
          </div>
          <img className="chatdescription" src={infoimg} onClick={this.click}></img>
        </div>
        {this.state.show ? <div className="description-box-chat">{user.description}</div> : null}
      </div>
    )

  }
}



export default MessageList;