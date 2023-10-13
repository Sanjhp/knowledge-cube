// Message.js
import React from "react";

const Message = ({ message }) => {
  return (
    <div className="message">
      <div className="icon" style={{ backgroundColor: message.color }}></div>
      <div>{message.text}</div>
    </div>
  );
};

export default Message;
