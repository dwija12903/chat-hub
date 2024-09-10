import React, { useState } from "react";

const AuthPage = ({ onAuth }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onAuth(username.trim());
    } else {
      setError("Username cannot be empty");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-96 transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
        LinkUp
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError("");
              }}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300 ease-in-out"
              placeholder="Enter your username"
            />
            {error && <p className="mt-2 text-sm text-red-600 animate-pulse">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Join Chat
          </button>
        </form>
      </div>
      <footer className="mt-8 text-center text-sm text-gray-600">
        Created by{" "}
        <a
          href="https://www.linkedin.com/in/dwijapanchal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-teal-600 hover:underline transition duration-300"
        >
          Dwija Panchal
        </a>
      </footer>
    </div>
  );
};

export default AuthPage;