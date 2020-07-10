import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMessage } from '../../actions/message.action';
import MessageItem from '../MessageItem/MessageItem';
import './MessageList.css';


let MessageList = (props) => {
  let {socket, room,  messages, getMessage} = props;
  //get message in room
  useEffect(() => {
    socket.on('room-accept', (data) => {
      getMessage(room);
    })

  }, [getMessage, room, socket]);

  //update new message
  useEffect(() => {
    socket.on('new-message', (data) => {
      getMessage(room)
    })
  }, [getMessage, room, socket]);



  return(
    <div className="MessageList">
      {
         messages && messages.messages &&  messages.messages.map((message, index) => 
            <MessageItem message={message} key={index} />)
      }
    </div>
  )
}

const mapStateToProp = (state) => ({
  messages: state.messages
})

const mapDispatchToProp = {
  getMessage: getMessage
}

MessageList = connect(mapStateToProp, mapDispatchToProp)(MessageList);

export default MessageList;