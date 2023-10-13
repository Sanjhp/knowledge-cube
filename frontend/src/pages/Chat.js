// ChatBox.js
import React, { useState } from "react";
import Message from "./Message";
import "./Chat.css";
const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      const randomColor = getRandomColor();
      const message = {
        text: newMessage,
        color: randomColor,
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBox;
