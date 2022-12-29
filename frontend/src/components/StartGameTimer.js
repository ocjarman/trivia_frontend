import React from "react";
import { useDispatch } from "react-redux";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { setGameStatus } from "../store/triviaSlice";
const StartGameTimer = () => {
  const dispatch = useDispatch();
  return (
    <>
      <CountdownCircleTimer
        isPlaying
        duration={10}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[7, 5, 2, 0]}
        onComplete={() => dispatch(setGameStatus("playing"))}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </>
  );
};

export default StartGameTimer;
