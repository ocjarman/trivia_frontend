import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRoom } from "../store/newUserSlice";
import { useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import { addMessage } from "../store/messagesSlice";
const socket = io.connect("http://localhost:4000");

const RoomView = () => {
  const params = useParams("");
  const roomId = params.id;
  const dispatch = useDispatch();

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const allMessages = useSelector((state) => state.messages.messages);
  const room = useSelector((state) => state.newUser.room);
  const name = useSelector((state) => state.newUser.name);
  const users = useSelector((state) => state.users.users);

  console.log(users);
  //   const joinRoom = () => {
  //     if (room !== "" && name !== "") {
  //       socket.emit("join_room", { name, room });
  //     }
  //   };

  const sendMessage = () => {
    console.log({ message }, { room });
    socket.emit("send_message", { message, room });
    dispatch(addMessage({ message }));
  };

  useEffect(() => {
    dispatch(setRoom(roomId));

    if (room !== "" && name !== "") {
      socket.emit("join_room", { name, room }, (error) => {
        if (error) alert(error);
      });
    }

    socket.on("receive_message", (data) => {
      console.log(data, "receiving message");
      setMessageReceived(data);
      dispatch(addMessage(data));
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
        {/* {allMessages.map((data) => (
          <p key={message.id}>
            new message: {data.user}:{data.message}
          </p>
        ))} */}
      </div>
    </div>
  );
};

export default RoomView;
