import React, { Component } from 'react';
import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput'


class Chat extends Component {

  render () {
    const {post} = this.props;
    const {matches} = this.props;
    const {user} = this.props.location.state;

    return (
      <div className="chatbox">
        <MessageList user={user} matches={matches}/>
        <MessageInput post={post} user={user} />
      </div>
    )
  }
}

export default Chat;