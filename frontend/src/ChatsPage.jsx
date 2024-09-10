import React, { useState, useRef, useEffect } from "react";

const ChatsPage = ({ user, messages, users, onSendMessage }) => {
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      onSendMessage(inputMessage);
      setInputMessage("");
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 to-teal-100">
      <div className="w-1/4 bg-white shadow-lg">
        <div className="p-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white">
          <h2 className="text-xl font-semibold">Online Users ({users.length})</h2>
        </div>
        <ul className="p-2 overflow-y-auto max-h-[calc(100vh-64px)]">
          {users.map((username, index) => (
            <li key={index} className="p-3 hover:bg-gray-100 rounded-md transition duration-150 ease-in-out">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2"></span>
              {username}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col flex-1">
        <div className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto py-4 px-6">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
            LinkUp
            </h1>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === user.username ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg shadow-md ${
                  message.sender === user.username
                    ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white"
                    : message.sender === 'System'
                    ? "bg-gray-500 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs mt-1 opacity-75">
                  {message.sender}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit} className="bg-white p-4 shadow-lg">
          <div className="flex rounded-lg border border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-blue-300 transition duration-300">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 px-4 py-2 text-sm focus:outline-none"
              placeholder="Type your message..."
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-2 text-sm font-medium hover:from-blue-600 hover:to-teal-600 transition duration-300 ease-in-out"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatsPage;