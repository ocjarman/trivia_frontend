import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setExitRoom, setRoom, setRoomJoined } from "../store/roomSlice";
import { setMessage, setMessageReceived } from "../store/messageSlice";
import { useSelector } from "react-redux";
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");

const ChatBox = () => {
  const dispatch = useDispatch();
  const roomJoined = useSelector((state) => state.room.roomJoined);
  const message = useSelector((state) => state.message.message);
  const messageReceived = useSelector((state) => state.message.messageReceived);
  const room = useSelector((state) => state.room.room);
  // 'emitting' sent message to the backend

  console.log(message);
  const sendMessage = () => {
    console.log({ message });
    console.log({ room });
    socket.emit("send_message", { message, room });
  };

  const handleExit = () => {
    dispatch(setRoom(""));
    dispatch(setRoomJoined(false));
  };
  const handleMessage = (event) => {
    dispatch(setMessage(event.target.value));
    // dispatch(setRoomJoined(false));
  };

  // receiving the message from other users to the front end
  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <>
      <div
        style={{
          border: "2px solid black",
          borderRadius: "5px",
          width: "200px",
          display: "flex",
          flexDirection: "column",
          height: "400px",
        }}
      >
        <div>
          <p>{message}</p>
          <p>{messageReceived}</p>
        </div>

        <div
          style={{
            display: "flex",
            postition: "absolute",
            marginBottom: "0",
            marginTop: "auto",
          }}
        >
          <input placeholder="message..." onChange={handleMessage}></input>
          <button onClick={sendMessage}>Send message</button>
        </div>
      </div>
      <button onClick={handleExit}>Exit room</button>
    </>
  );
};

export default ChatBox;
