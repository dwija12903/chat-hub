import React, { useState, useEffect } from "react";
import io from 'socket.io-client';
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

// const socket = io('http://localhost:3001');

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const socket = io(`${BACKEND_URL}`);

function App() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Setup event listeners
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on('userList', (userList) => {
      setUsers(userList);
    });

    socket.on('userJoined', (username) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: `${username} has joined the chat`, sender: 'System' }
      ]);
    });

    socket.on('userLeft', (username) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: `${username} has left the chat`, sender: 'System' }
      ]);
    });

    // Cleanup event listeners
    return () => {
      socket.off('message');
      socket.off('userList');
      socket.off('userJoined');
      socket.off('userLeft');
    };
  }, []);

  const handleLogin = (username) => {
    setUser({ username });
    socket.emit('login', username);
  };

  const handleSendMessage = (message) => {
    const newMessage = { text: message, sender: user.username };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    socket.emit('sendMessage', message);
  };

  if (!user) {
    return <AuthPage onAuth={handleLogin} />;
  } else {
    return <ChatsPage user={user} messages={messages} users={users} onSendMessage={handleSendMessage} />;
  }
}

export default App;