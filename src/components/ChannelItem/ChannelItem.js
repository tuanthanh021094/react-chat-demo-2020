import React from "react";
import { Link } from "react-router-dom";
import "./ChannelItem.css";

const ChannelItem = (props) => {
  let { nameRoom, name } = props;
  let href = `/?room=${name}`;
  return (
    <Link to={href} className="roomLink">
      <div className="ChannelItem">
        <img
          src="https://image.flaticon.com/icons/svg/2950/2950711.svg"
          width={32}
          alt=""
        />

        <p>{` ${name || nameRoom}`}</p>
      </div>
    </Link>
  );
};

ChannelItem.defaultProps = {
  nameRoom: "chatroom",
};

export default ChannelItem;
