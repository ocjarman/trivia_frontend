import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRoomId } from "../../store/newUserSlice";
import { useParams } from "react-router-dom";
import { setUsers } from "../../store/usersSlice";
import io from "socket.io-client";
import { addMessage } from "../../store/messagesSlice";
import Messages from "../ChatBox/Messages";
import MessageInput from "../ChatBox/MessageInput";
import UsersInRoom from "./UsersInRoom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { deleteUser } from "../../store/usersSlice";
import { useNavigate } from "react-router-dom";
import styles from "./Room.styles";
import TriviaBox from "../Trivia/TriviaBox";
import {
  setQuestions,
  setShowQuestions,
  setCurrentResults,
  showPlayButton,
  setLoadingQuestions,
  resetResults,
  resetQuestions,
  resetActiveStep,
  setActiveStep,
} from "../../store/triviaSlice";
import { setOpenStartGamePopup } from "../../store/triviaSlice";
import RoomAppBar from "./RoomAppBar";
import Results from "../Trivia/Results";

const socket = io.connect("http://localhost:4000");
// const socket = io.connect("https://guarded-bayou-56057.herokuapp.com/");

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
  const currentResults = useSelector((state) => state.trivia.currentResults);
  const questions = useSelector((state) => state.trivia.questions);
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    // on loading page if no room or name, send back to join page
    if (roomId === "" || name === "") {
      navigate("/");
    } else {
      socket.emit("join_room", { name, roomId });

      socket.on("message", (message) => {
        dispatch(addMessage(message));
      });

      socket.on("roomData", ({ users }) => {
        dispatch(setUsers(users));
      });

      socket.on(
        "gameStatus",
        ({ gameStatus, randomizedQuestions, allGameScores }) => {
          if (gameStatus === "ready") {
            dispatch(showPlayButton(true));
            dispatch(resetResults());
            dispatch(setShowQuestions(false));
            dispatch(resetQuestions());
            dispatch(setActiveStep(0));
          } else if (gameStatus === "started") {
            //hide play button
            //show game will start in 10 min popup
            //set questions
            dispatch(showPlayButton(false));
            dispatch(setLoadingQuestions(true));
            dispatch(setOpenStartGamePopup(true));
            dispatch(setQuestions(randomizedQuestions));
            dispatch(setLoadingQuestions(false));
          } else if (gameStatus === "in progress") {
            // show trivia questions
            // hide countdown popup
            dispatch(setOpenStartGamePopup(false));
            dispatch(setShowQuestions(true));
          } else if (gameStatus === "results") {
            // set results
            dispatch(setCurrentResults(allGameScores));
          }
        }
      );
    }
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
    dispatch(deleteUser(user));
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#EFEFEF",
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

          {currentResults?.length > 0 ? (
            <Item sx={styles.sx.ScoreContainer}>
              <h3>Game Score:</h3>
              {currentResults?.map((result, i) => {
                return <Results result={result} key={i} />;
              })}
            </Item>
          ) : null}

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
