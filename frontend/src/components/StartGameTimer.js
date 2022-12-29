import React from "react";
import { useDispatch } from "react-redux";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import {
  setGameStatus,
  setOpenStartGamePopup,
  setShowQuestions,
} from "../store/triviaSlice";
const StartGameTimer = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setOpenStartGamePopup(false));
  };
  return (
    <>
      <CountdownCircleTimer
        isPlaying
        duration={10}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[7, 5, 2, 0]}
        onComplete={() => {
          dispatch(setShowQuestions(true));
          dispatch(setGameStatus("in progress"));
          handleClose();

          return { shouldRepeat: false, delay: 0.5 }; // repeat animation in 1.5 seconds
        }}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </>
  );
};

export default StartGameTimer;
