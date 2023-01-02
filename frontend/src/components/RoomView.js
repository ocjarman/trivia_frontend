import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRoomId } from "../store/newUserSlice";
import { useParams } from "react-router-dom";
import { setUsers } from "../store/usersSlice";
import io from "socket.io-client";
import { addMessage } from "../store/messagesSlice";
import Messages from "./ChatBox/Messages";
import MessageInput from "./ChatBox/MessageInput";
import UsersInRoom from "./UsersInRoom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { deleteUser } from "../store/usersSlice";
import { useNavigate } from "react-router-dom";
import styles from "./Room.styles";
import TriviaBox from "./Trivia/TriviaBox";
import {
  setGameStatus,
  setPlayerIsAlone,
  setQuestions,
} from "../store/triviaSlice";
import { setOpenStartGamePopup } from "../store/triviaSlice";
import RoomAppBar from "./RoomAppBar";

const socket = io.connect("http://localhost:4000");

socket.on("connect", () => {
  console.log("connected");
});

const RoomView = () => {
  const params = useParams("");
  const roomIdFromParams = params.id;
  const dispatch = useDispatch();

  setRoomId(roomIdFromParams);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const allMessages = useSelector((state) => state.messages.messages);
  const roomId = useSelector((state) => state.newUser.roomId);
  const name = useSelector((state) => state.newUser.name);
  const users = useSelector((state) => state.users.users);
  const gameStatusFE = useSelector((state) => state.trivia.gameStatus);
  useEffect(() => {
    // on loading page if no room or name, send back to join page
    if (roomId === "" || name === "") {
      navigate("/");
    }

    // if roomId and name are not empty, send name/roomId data to server to join roomId
    // Whenever users will access this page, join event will be called from the backend.
    if (roomId !== "" && name !== "") {
      socket.emit("join_room", { name, roomId }, (error) => {
        if (error) {
          alert(error);
        }
      });
      return () => {
        socket.off();
      };
    }
  }, []);

  useEffect(() => {
    // on entering a room, add the admin message to the message state welcoming the user
    // listening to message from the server with socket.on
    socket.on("message", (message) => {
      dispatch(addMessage(message));
    });

    // whenever roomData emits on backend, frontend  users state will be updated
    socket.on("roomData", ({ users }) => {
      dispatch(setUsers(users));
      if (users.length > 1) {
        dispatch(setPlayerIsAlone(false));
      }
    });

    socket.on("gameStarted", ({ questions }) => {
      dispatch(setQuestions(questions));
    });

    socket.on("gameStatus", ({ gameStatus }) => {
      if (gameStatus === "in progress") {
        dispatch(setGameStatus("in progress"));
      } else if (gameStatus === "game results") {
        dispatch(setGameStatus("game results"));
      } else if (gameStatus === "ready") {
        console.log("ready? ", { gameStatus });
        dispatch(setGameStatus("ready"));
      }
    });

    socket.on("otherPlayerStartedGame", ({ questions }) => {
      // find way to get alert dialog to popup for other users
      //set start warning and questions
      dispatch(setQuestions(questions));
      dispatch(setOpenStartGamePopup(true));
      dispatch(setGameStatus("in progress"));
      if (users.length > 1) {
        dispatch(setPlayerIsAlone(true));
      } else {
        dispatch(setPlayerIsAlone(false));
      }
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      //if theres a message from a user, send it to backend, then reset to empty on frontend
      // msg from client to server
      socket.emit("send_message", message);
      setMessage("");
    }
  };

  //  if user clicks 'leave' button, filter them out on front end, and turn off socket
  const handleExit = () => {
    const user = users.filter(
      (user) => user.name === name && user.roomId === roomId
    );
    socket.off();
    // handle delete user on frontend
    dispatch(deleteUser(user));
    checkUsers();
  };

  const checkUsers = () => {
    if (users.length <= 1) {
      dispatch(setPlayerIsAlone(true));
    }
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "aliceBlue",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={styles.sx.RoomContainer}>
      <RoomAppBar handleExit={handleExit} roomId={roomId} name={name} />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Grid item xs={3}>
          <Item style={styles.sx.UsersContainer}>
            <UsersInRoom users={users} roomId={roomId} />
          </Item>
          <Item sx={styles.sx.ChatBox}>
            <Messages messages={allMessages} name={name} />
          </Item>

          <MessageInput
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </Grid>

        <Grid item xs={5}>
          <Item sx={styles.sx.TriviaBox}>
            <TriviaBox socket={socket} />
          </Item>
        </Grid>
      </Box>
    </Box>
  );
};

export default RoomView;
