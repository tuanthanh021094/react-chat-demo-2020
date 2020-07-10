import React from "react";
import { connect } from "react-redux";
import { sendMessage } from "../../actions/message.action";

import "./SendMessage.css";

const refInput = React.createRef();

let SendMessage = (props) => {
  let { user, socket, room, sendMessage } = props;
  console.log(user);
  const onSend = (e) => {
    e.preventDefault();
    sendMessage({
      userName: user.user.name,
      text: refInput.current.value,
      room: room,
    });
    refInput.current.value = "";
    socket.emit("send-message");
  };
  return (
    <div className="SendMessage">
      <div className="SendMessage-input">
          <form className="form-send-mess" onSubmit={onSend}>
            <input
              type="text"
              ref={refInput}
              placeholder="send message to my friend"
              />
            <button>
              <img
                className="w-6 h-6 ml-2 mr-4"
                width={32}
                src="https://image.flaticon.com/icons/svg/2983/2983787.svg"
                alt=""
              />
            </button>
          </form>
      </div>
    </div>
  );
};

const mapStateToProp = (state) => ({
  user: state.user,
});

const mapDispatchToProp = {
  sendMessage: sendMessage,
};
SendMessage = connect(mapStateToProp, mapDispatchToProp)(SendMessage);

export default SendMessage;
