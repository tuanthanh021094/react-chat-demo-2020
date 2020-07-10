import React, { useRef, useEffect } from "react";
import "./MessageItem.css";
import moment from "moment";

const MessageItem = ({ message }) => {
  const { userName, text, date } = message;
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, []);
  return (
    <div>
      <div className="MessageItem-group">
        <div className="MessageItem">
          <img
            src="https://image.flaticon.com/icons/svg/2948/2948218.svg"
            width={24}
            alt=""
          />
          <div className="MessageItem-user">
            <p>{userName}</p>
          </div>
          <div className="MessageItem-time">
            <p>{moment(date, "YYYYMMDD").fromNow()}</p>
          </div>
        </div>
        <p>{text}</p>
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageItem;
