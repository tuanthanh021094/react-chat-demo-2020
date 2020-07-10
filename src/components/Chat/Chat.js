import queryString from "query-string";
import React, { useEffect } from "react";
import MessageList from "../MessageList/MessageList";
import SendMessage from "../SendMessage/SendMessage";
import "./Chat.css";

const Chat = (props) => {
  let { socket, location } = props;
  let { room } = queryString.parse(location.search);

  useEffect(() => {
    if (room) {
      socket.emit("join", room);
    }
  }, [room, socket]);
  return (
    <div className="Chat">
      <div className="Chat-join">
        {room && (
          <p>
            <strong>
              {room}
            </strong>
          </p>
        )}
      </div>
      <MessageList socket={socket} room={room} />
      <SendMessage socket={socket} room={room} />
    </div>
  );
};

export default Chat;
