import React from 'react';
import './HigherOrderChannelComponent.css';

let HigherOrderChannelComponent = (option={title: "Channel"}, WrappedComponent, socket) => {
  return () => {
    return(
      <div className="HigherOrderChannelComponent">
        <WrappedComponent option={option} socket={socket}/>
      </div>
    )
  }
}

export default HigherOrderChannelComponent;