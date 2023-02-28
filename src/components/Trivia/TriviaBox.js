import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import AllQuestions from "../Questions/AllQuestions";

import StartGamePopup from "./StartGamePopup";
import "./trivia.css";

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
        <div className="triviaBox">
          {!showQuestions && (
            <button
              variant="outlined"
              onClick={handleClickOpen}
              className="popupButton"
            >
              Play Trivia!
            </button>
          )}
          {openStartGamePopup && <StartGamePopup />}
          {showQuestions && !loadingQuestions && (
            <AllQuestions socket={socket} />
          )}
        </div>
      )}
      {!isDesktop && (
        <div className="mobileTriviaBox">
          {!showQuestions && (
            <button
              variant="outlined"
              onClick={handleClickOpen}
              className="popupButton"
            >
              Play Trivia!
            </button>
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
