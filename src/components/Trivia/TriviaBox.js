import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import AllQuestions from "../Questions/AllQuestions";

import StartGamePopup from "./StartGamePopup";
import styles from "../Trivia/Trivia.styles";
const TriviaBox = ({ socket }) => {
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
      {!showQuestions ? (
        <div>
          <Button
            variant="outlined"
            onClick={handleClickOpen}
            sx={styles.sx.PopupButton}
          >
            Play Trivia!
          </Button>
        </div>
      ) : null}

      {openStartGamePopup && <StartGamePopup />}

      {showQuestions && !loadingQuestions ? (
        <AllQuestions socket={socket} />
      ) : null}
    </>
  );
};

export default TriviaBox;
