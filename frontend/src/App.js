import "./App.css";
import React from "react";
import ChatBox from "./components/ChatBox";
import { useDispatch, useSelector } from "react-redux";
import { setRoom, setRoomJoined } from "./store/roomSlice";
import { useEffect } from "react";
import { setMessageReceived } from "./store/messageSlice";

import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");

function App() {
  const roomJoined = useSelector((state) => state.room.roomJoined);
  const room = useSelector((state) => state.room.room);
  const message = useSelector((state) => state.message.message);
  const messageReceived = useSelector((state) => state.message.messageReceived);

  const dispatch = useDispatch();
  const handleRoom = (event) => {
    dispatch(setRoom(event.target.value));
  };
  console.log(roomJoined);
  console.log(room);
  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
      dispatch(setRoomJoined(true));
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      dispatch(setMessageReceived(data.message));
    });
  }, [socket]);

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
        {/* <Home /> */}
        {!roomJoined && (
          <>
            <input placeholder="room number" onChange={handleRoom}></input>
            <button onClick={joinRoom}>Join Room</button>
          </>
        )}

        {roomJoined && (
          <>
            <p>Welcome to room: {room}</p>
            <ChatBox />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
