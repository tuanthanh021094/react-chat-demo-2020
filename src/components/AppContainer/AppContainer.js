import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../../actions/index';
import socket from '../../socket/index';
import { useCookies } from 'react-cookie';

import './AppContainer.css';
import Menu from '../Menu/Menu';
import HigherOrderChannelComponent from '../HigherOrderChannelComponent/HigherOrderChannelComponent';
import ChannelList from '../ChannelList/ChannelList';
import Chat from '../Chat/Chat';

const WithChannelComponent = HigherOrderChannelComponent({ title: "Channel" }, ChannelList, socket);

let AppContainer = (props) => {
  let { getUser, location } = props;
  let [cookies, , ] = useCookies(['userID']);
  //getUser
  useEffect(() => {
    if (cookies.userID) {
      getUser(cookies.userID);

    }
  })

  return (
    <>
      {
        true ? (
          <div className="AppContainer">
            <div className="AppContainer-left">
              <Menu socket={socket} />
              <WithChannelComponent />
            </div>
            <div className="AppContainer-right">
              <Chat location={location} socket={socket}/>
            </div>
          </div>

        ) : (
          <Redirect to="/login" />
        )
      }
    </>
  )
}

const mapDispatchToProp = {
  getUser: getUser
}

AppContainer = connect(null, mapDispatchToProp)(AppContainer);

export default AppContainer;