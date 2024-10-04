const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: "*",  
  }
});

const corsOptions = {
  origin: true,
  credentials: true,
}
app.use(cors(corsOptions))

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is up and running');
});

const users = new Map();

const updateUserList = () => {
  io.emit('userList', Array.from(users.values()));
};

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('login', (username) => {
    users.set(socket.id, username);
    updateUserList();
    socket.broadcast.emit('userJoined', username);
    console.log(`${username} joined the chat`);
  });

  socket.on('sendMessage', (message) => {
    const username = users.get(socket.id);
    // Emit message to all clients except the sender
    socket.broadcast.emit('message', { text: message, sender: username });
    console.log(`Message from ${username}: ${message}`);
  });

  socket.on('disconnect', () => {
    const username = users.get(socket.id);
    if (username) {
      users.delete(socket.id);
      updateUserList();
      socket.broadcast.emit('userLeft', username);
      console.log(`${username} left the chat`);
    }
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));