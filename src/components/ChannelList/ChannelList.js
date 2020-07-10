import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRoom } from '../../actions/index';

import './ChannelList.css';

import ChannelItem from '../ChannelItem/ChannelItem';

let ChannelList = (props) => {
  let { rooms, getRoom, option, socket } = props;
  //get room
  useEffect(() => {
    getRoom();
  }, [getRoom]);

  //get new channel created
  useEffect(() => {
    socket.on('new-channel', () => {
      getRoom();
    })
  }, [getRoom, socket])

  return (
    <div className="ChannelList">
      <div className="ChannelList-header">
        <p className="title">{option.title}</p>
        <p>{
          Array.isArray(rooms) ? (
            rooms.length
          ) : (null)
        }</p>
      </div>
      <div className="ChannelList-room">
        {
          Array.isArray(rooms) ? (
            rooms.map((channel, index) => <ChannelItem {...channel} key={index} />)
          ) : (null)
        }
      </div>
    </div>
  )
}

const mapStateToProp = (state) => ({
  rooms: state.rooms
})

const mapDispatchToProp = {
  getRoom: getRoom
}

ChannelList = connect(mapStateToProp, mapDispatchToProp)(ChannelList);

export default ChannelList;