import React from "react";
import { setQuestions, setGameStatus } from "../store/triviaSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import StartGamePopup from "./StartGamePopup";
import AllQuestions from "./Questions/AllQuestions";
import { setLoadingQuestions } from "../store/triviaSlice";
import { setOpenStartGamePopup, setPlayerIsAlone } from "../store/triviaSlice";

const TriviaBox = ({ socket }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const gameStatus = useSelector((state) => state.trivia.gameStatus);
  const questions = useSelector((state) => state.trivia.questions);
  const showQuestions = useSelector((state) => state.trivia.showQuestions);
  const open = useSelector((state) => state.trivia.openStartGamePopup);
  const loadingQuestions = useSelector(
    (state) => state.trivia.loadingQuestions
  );
  if (questions.length > 1) {
    dispatch(setLoadingQuestions(false));
  }

  const handleClickOpen = () => {
    dispatch(setOpenStartGamePopup(true));
    dispatch(setGameStatus("in progress"));
    socket.emit("startGame");
    if (users.length > 1) {
      dispatch(setPlayerIsAlone(false));
    } else {
      dispatch(setPlayerIsAlone(true));
    }
  };

  return (
    <>
      {gameStatus === "ready" && (
        <>
          <h3>Welcome to Trivia! </h3>
          <Button variant="outlined" onClick={handleClickOpen}>
            Play Trivia!
          </Button>
        </>
      )}
      {open && <StartGamePopup />}
      {/* {loadingQuestions && <p>questions loading!</p>} */}
      {!loadingQuestions && !open && gameStatus === "in progress" ? (
        <AllQuestions socket={socket} />
      ) : null}
    </>
  );
};

export default TriviaBox;
