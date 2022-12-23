import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setUsers } from "../store/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { setName, setRoom } from "../store/newUserSlice";
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");

const Home = () => {
  //   const [room, setRoom] = useState("");
  //   const [name, setName] = useState("");
  const room = useSelector((state) => state.newUser.room);
  const name = useSelector((state) => state.newUser.name);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRoom = (event) => {
    dispatch(setRoom(event.target.value));
  };
  const handleName = (event) => {
    dispatch(setName(event.target.value));
  };

  const handleUser = () => {
    dispatch(setUsers({ room, name }));
  };
  const navigateToRoom = () => {
    navigate(`/room/${room}`);
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
          <input placeholder="username" onChange={handleName}></input>
          <input placeholder="room number" onChange={handleRoom}></input>
          <button type="submit" onClick={handleUser}>
            Join Room
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
