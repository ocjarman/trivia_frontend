import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRoom } from "../store/newUserSlice";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { setUsers } from "../store/usersSlice";
import io from "socket.io-client";
import { addMessage } from "../store/messagesSlice";
import RoomInfo from "./RoomInfo";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import UsersInRoom from "./UsersInRoom";

const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};

const socket = io.connect("http://localhost:4000", connectionOptions);

const RoomView = () => {
  const params = useParams("");
  const roomId = params.id;
  const dispatch = useDispatch();
  setRoom(roomId);

  const [message, setMessage] = useState("");
  const allMessages = useSelector((state) => state.messages.messages);
  const room = useSelector((state) => state.newUser.room);
  const name = useSelector((state) => state.newUser.name);
  const users = useSelector((state) => state.users.users);
  console.log({ allMessages });
  console.log(users);

  const ENDPOINT = "localhost:4000";

  useEffect(() => {
    // if room and name are not empty, send name/room data to server to join room
    // Whenever users will access this page, join event will be called from the backend.
    if (room !== "" && name !== "") {
      socket.emit("join_room", { name, room }, (error) => {
        if (error) {
          alert(error);
        }
      });
      return () => {
        // socket.emit("disconnect");
        socket.off();
      };
    }
  }, [ENDPOINT, name, room]);

  useEffect(() => {
    console.log("starting useeffect");
    // Whenever messages or user data changes i.e. if any user joins or leaves
    // or any user posted a message event will be called and roomdata event will
    // be called inside useeffect to show the message of user entry or leaving and
    // storing it in message array
    socket.on("message", (message) => {
      console.log("received new msg", message);
      dispatch(addMessage(message));
    });

    socket.on("roomData", ({ users }) => {
      dispatch(setUsers(users));
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      console.log(message);
      //if theres a message, send it back, then reset to empty
      socket.emit("send_message", message);
    }
  };

  return (
    <div>
      <RoomInfo room={room} />
      <div
        style={{ border: "2px solid black", width: "200px", height: "200px" }}
      >
        <br></br>
        <Messages messages={allMessages} name={name} />
        <MessageInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
        <UsersInRoom users={users} />
      </div>
      <a href="/">
        <button>Leave</button>
      </a>
    </div>
  );
};

export default RoomView;
