import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRoom } from "../store/roomSlice";
import { useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import { setAllMessages } from "../store/messagesSlice";
const socket = io.connect("http://localhost:4000");

const RoomView = () => {
  const params = useParams("");
  const roomId = params.id;
  const dispatch = useDispatch();

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const allMessages = useSelector((state) => state.messages.messages);
  const room = useSelector((state) => state.room.room);

  console.log({ allMessages });
  const joinRoom = (roomToJoin) => {
    console.log("in join room", roomToJoin);
    if (roomToJoin !== "") {
      console.log({ roomToJoin });
      socket.emit("join_room", roomToJoin);
    }
  };

  const sendMessage = () => {
    console.log({ message }, { room });
    socket.emit("send_message", { message, room });
    dispatch(setAllMessages(message));
  };

  useEffect(() => {
    console.log("hi");
    dispatch(setRoom(roomId));
    console.log(roomId);
    joinRoom(roomId);
    socket.on("receive_message", (data) => {
      console.log(data.message, "receiving message");
      setMessageReceived(data.message);
      dispatch(setAllMessages(data.message));
    });
  }, [socket]);

  return (
    <div>
      <h1>welcome to room ...{roomId}</h1>
      <div
        style={{ border: "2px solid black", width: "200px", height: "200px" }}
      >
        <input
          placeholder="message..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
        <p>Message received: {messageReceived}</p>
        <p>message sent: {message}</p>
        <br></br>
        {allMessages.map((message) => (
          <p>new message: {message}</p>
        ))}
      </div>
    </div>
  );
};

export default RoomView;
