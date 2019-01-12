import React, { Component } from 'react';
import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput'


class Chat extends Component {

  render () {
    const {post} = this.props;

    console.log('chat', this.props.userId, this.props.location.state.user)
    const {user} = this.props.location.state;

    return (

      <div className="chatbox">
        <MessageList user={user} />
        <MessageInput post={post} user={user} />
      </div>



    )







  }


}

export default Chat;