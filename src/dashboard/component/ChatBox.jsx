import React, { useState, useRef } from 'react';
import { Chatbot } from 'react-simple-chatbot';
import '../style/ChatBox.css'
import UserProfileUpdate from './UserProfileUpdate';
import TopNav from './TopNav';


function Chatbox  () {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  const getCurrentTimestamp = () => {
    return new Date().toLocaleString();
  };

  const handleSendMessage = () => {
    if (userMessage.trim() !== '') {
      const newMessage = {
        content: userMessage,
        sender: 'user',
        timestamp: getCurrentTimestamp(),
      };
      setMessages([...messages, newMessage]);
      setUserMessage(''); 
    }
  };

  return (
    <div><TopNav/>
    <br/>
    <br/>
    <br/>
    <div className="chatbox"><h1>ADMIN</h1>
      <div className="chatbox-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <br/>
            <span className="message-timestamp">{msg.timestamp}</span><br/>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="chatbox-input">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
    </div>
  );
};

export default Chatbox;

