import React, { Component } from 'react';
import './MessageList.css';
import Message from './Message/Message';

class MessageList extends Component {

  render() {
    let messages = null;
    if (this.props.chatMessages) {
      messages = Object.keys(this.props.chatMessages['messages']).map(key => {
        return <ul>
          <Message
            messageText={this.props.chatMessages['messages'][key]['messageText']}
            reciverId={this.props.chatMessages['messages'][key]['reciverId']}
            senderId={this.props.chatMessages['messages'][key]['senderId']}
            timeStamp={this.props.chatMessages['messages'][key]['timeStamp']}
            userImg={this.props.currUserId === this.props.chatMessages['messages'][key]['senderId'] ? this.props.myUserImg : this.props.otherUserImage}
            class={this.props.currUserId === this.props.chatMessages['messages'][key]['senderId'] ? 'msg-right' : 'msg-left'} />
        </ul>
      });
    }

    return (
      <div className="message mCustomScrollbar" data-mcs-theme="minimal-dark">
        {messages}
      </div>
    );
  };
};

export default MessageList;