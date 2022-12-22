import "./App.css";
import Home from "../src/components/Home";
import axios from "axios";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");

function App() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };
  // 'emitting' sent message to the backend
  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  // receiving the message from other users to the front end
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <div className="App">
      <p>Welcome to Trivia </p>
      {/* <Home /> */}

      <input
        placeholder="room number"
        onChange={(event) => setRoom(event.target.value)}
      ></input>
      <button onClick={joinRoom}>Join Room</button>

      <input
        placeholder="message..."
        onChange={(event) => setMessage(event.target.value)}
      ></input>
      <button onClick={sendMessage}>Send message</button>
      <div>
        <p>{messageReceived}</p>
      </div>
    </div>
  );
}

export default App;
