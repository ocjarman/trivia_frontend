import React from "react";
import { useDispatch } from "react-redux";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import {
  setOpenStartGamePopup,
  setShowQuestions,
} from "../../store/triviaSlice";

const StartGameTimer = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setOpenStartGamePopup(false));
    dispatch(setShowQuestions(true));
  };
  return (
    <CountdownCircleTimer
      isPlaying
      duration={5}
      colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
      colorsTime={[7, 5, 2, 0]}
      onComplete={() => {
        handleClose();
        return { shouldRepeat: false, delay: 0.5 }; // repeat animation in 1.5 seconds
      }}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );
};

export default StartGameTimer;
