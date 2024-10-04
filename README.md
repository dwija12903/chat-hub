# **LinkUp: A Real-Time Chat Hub**

A real-time chat application built using React for the frontend, Express and Socket.IO for the backend, allowing users to log in, join chats, and communicate with other users in real-time.

## **Table of Contents**
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Testing the Chat](#testing-the-chat)
- [Contributing](#contributing)
- [License](#license)

---

## **Features**

- Real-time chat with Socket.IO.
- Broadcasts when a user joins or leaves the chat.
- Displays the list of online users.
- Simple login interface with username authentication.
- Responsive and modern UI built with Tailwind CSS.
- Seamless integration between the frontend and backend.

---

## **Technologies Used**

### **Frontend:**
- **React**: For building the user interface.
- **Socket.IO Client**: To establish a WebSocket connection with the backend.
- **Vite**: Used for bundling and serving the frontend assets.
- **Tailwind CSS**: For styling and designing the frontend.

### **Backend:**
- **Express.js**: Node.js framework used to create the backend API.
- **Socket.IO**: To handle real-time communication between the server and clients.
- **dotenv**: For environment variable management.
- **CORS**: To enable cross-origin requests from the frontend.

---

## **Getting Started**

### **Prerequisites**
Make sure you have the following installed:
- **Node.js** (v12+)
- **npm** or **yarn**

---

### **Backend Setup**

1. Clone the repository:
   ```bash
   git clone https://github.com/dwija12903/chat-hub.git
   cd chat-hub
   ```

2. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```

3. Install the backend dependencies:
   ```bash
   npm install
   ```

4. Run the backend server:
   ```bash
   node sever.js
   ```

5. The backend server should now be running on `http://localhost:3001`.

---

### **Frontend Setup**

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```

2. Install the frontend dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables, Create a `.env` file in the `frontend` directory with the following value:

```bash
VITE_BACKEND_URL = http://localhost:3001
```

4. Start the frontend development server:
   ```bash
   npm run dev
   ```

5. The frontend should now be accessible at `http://localhost:5173/`.

---

## **Usage**

1. **Login**: Enter a username on the login page to join the chat.
2. **Chat**: Once logged in, you'll see the list of online users and the chat interface. You can send and receive messages in real-time.
3. **Real-time Updates**:
   - Users are notified when someone joins or leaves the chat.
   - Messages are broadcasted instantly to all connected users.

---

## **Testing the Chat**

To test the real-time chat functionality:

1. Open the application in two separate browser windows or tabs. Both should point to `http://localhost:5173`.
   
2. Log in with different usernames in each window.

3. Send messages in one window, and you will see the messages instantly appear in the other window.

4. The user list will automatically update as users join or leave the chat.

---

## **Contributing**

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin my-feature-branch`.
5. Submit a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

### **Author**

Created by [Dwija Panchal](https://www.linkedin.com/in/dwijapanchal).