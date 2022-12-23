import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");

const Home = () => {
  const [tempRoom, setTempRoom] = useState("");
  const navigate = useNavigate();

  const handleRoom = (event) => {
    setTempRoom(event.target.value);
  };
  const navigateToRoom = () => {
    navigate(`/room/${tempRoom}`);
  };

  return (
    <div
      style={{
        width: "400px",
        border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        justifyItems: "center",
        alignContent: "flex-start",
      }}
    >
      <div className="App">
        <p>Welcome to Trivia </p>
        <form onSubmit={navigateToRoom}>
          <input placeholder="room number" onChange={handleRoom}></input>
          <button type="submit">Join Room</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
