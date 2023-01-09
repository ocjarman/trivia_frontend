import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import AllQuestions from "../Questions/AllQuestions";

import StartGamePopup from "./StartGamePopup";
import styles from "../Trivia/Trivia.styles";
const TriviaBox = ({ socket }) => {
  const isDesktop = useSelector((state) => state.users.isDesktop);
  const openStartGamePopup = useSelector(
    (state) => state.trivia.openStartGamePopup
  );
  const showQuestions = useSelector((state) => state.trivia.showQuestions);
  const loadingQuestions = useSelector(
    (state) => state.trivia.loadingQuestions
  );

  const handleClickOpen = () => {
    socket.emit("startGame");
  };

  return (
    <>
      {isDesktop && (
        <div styles={styles.sx.TriviaBox}>
          {!showQuestions && (
            <Button
              variant="outlined"
              onClick={handleClickOpen}
              sx={styles.sx.PopupButton}
            >
              Play Trivia!
            </Button>
          )}
          {openStartGamePopup && <StartGamePopup />}
          {showQuestions && !loadingQuestions && (
            <AllQuestions socket={socket} />
          )}
        </div>
      )}
      {!isDesktop && (
        <div styles={styles.sx.MobileTriviaBox}>
          {!showQuestions && (
            <Button
              variant="outlined"
              onClick={handleClickOpen}
              sx={styles.sx.PopupButton}
            >
              Play Trivia!
            </Button>
          )}
          {openStartGamePopup && <StartGamePopup />}
          {showQuestions && !loadingQuestions && (
            <AllQuestions socket={socket} />
          )}
        </div>
      )}
    </>
  );
};

export default TriviaBox;
