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
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

// import { makeStyles } from "@material-ui/core/styles";

const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};

const socket = io.connect("http://localhost:4000", connectionOptions);

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
//   chatSection: {
//     width: "100%",
//     height: "80vh",
//   },
//   headBG: {
//     backgroundColor: "#e0e0e0",
//   },
//   borderRight500: {
//     borderRight: "1px solid #e0e0e0",
//   },
//   messageArea: {
//     height: "70vh",
//     overflowY: "auto",
//   },
// });

const RoomView = () => {
  const params = useParams("");
  const roomId = params.id;
  const dispatch = useDispatch();
  setRoom(roomId);
  //   const classes = useStyles();

  const [message, setMessage] = useState("");
  const allMessages = useSelector((state) => state.messages.messages);
  const room = useSelector((state) => state.newUser.room);
  const name = useSelector((state) => state.newUser.name);
  const users = useSelector((state) => state.users.users);

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

  //   const messageRef = useRef();

  //   if (messageRef.current) {
  //     messageRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "end",
  //       inline: "nearest",
  //     });
  //   }

  //   ref={messageRef}

  useEffect(() => {
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
      socket.emit("send_message", message, () => setMessage(""));
    }
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Item>
            <a href="/">
              <button>Leave</button>
            </a>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <UsersInRoom users={users} />
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <RoomInfo room={room} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item
            sx={{
              margin: "8px",
              height: "500px",
              overflowX: "auto",
            }}
          >
            <Messages messages={allMessages} name={name} />
          </Item>
          <MessageInput
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RoomView;
