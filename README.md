# 🗨️ LinkUp: A Real-Time Chat Hub

Welcome to the **LinkUp**! 🎉 This is a real-time chat application built with **Node.js** and **React**. It allows users to join a chat room, send messages, and see who is online in real-time. 🚀

## 🚀 Features

- **Real-Time Messaging**: Send and receive messages instantly. 💬
- **User Management**: Log in with a username and see who is online. 🧑‍💻
- **Dynamic User List**: Automatically updates when users join or leave. 👥
- **Responsive Design**: Works on both desktop and mobile devices. 📱💻

## 🛠️ Technologies Used

- **Frontend**: 
  - React
  - Tailwind CSS
- **Backend**: 
  - Node.js
  - Express
  - Socket.IO

## 📦 Installation

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/yourusername/splendid-chat-hub.git
cd splendid-chat-hub
```

### Install Dependencies

**Backend:**

```bash
cd backend
npm install
```

**Frontend:**

```bash
cd frontend
npm install
```

### Configuration

Ensure the backend server is configured to allow requests from your frontend:

- **Backend (`server.js`)**: 
  - Set `origin` to `http://localhost:5173` (or your frontend URL) for CORS settings.

### Run the Application

**Start the Backend Server:**

```bash
cd backend
npm start
```

**Start the Frontend Server:**

```bash
cd frontend
npm start
```

Open your browser and navigate to `http://localhost:5173` to start chatting! 🌐

## 🧩 Usage

1. **Login**: Enter a username and click "Join Chat" to start.
2. **Chat**: Type your message in the input box and hit "Send" to share with others.
3. **See Online Users**: The sidebar shows a list of currently online users.

## 📝 Contribution

Contributions are welcome! Please fork the repository and submit a pull request with your changes. 🙌


## 👤 Author

Created by [Dwija Panchal](https://www.linkedin.com/in/dwijapanchal) 🎨

## 📢 Acknowledgements

- [Socket.IO](https://socket.io/) - For real-time web socket communication. 🔗
- [React](https://reactjs.org/) - For building the user interface. ⚛️
- [Tailwind CSS](https://tailwindcss.com/) - For styling. 🎨

---

Happy chatting! 🗨️😊
