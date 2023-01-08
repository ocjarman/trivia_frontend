import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const StartGameTimer = () => {
  return (
    <CountdownCircleTimer
      isPlaying
      duration={10}
      colors={["#5A4AE3", "#685AE4", "#857BE1", "#BBB5F5"]}
      colorsTime={[7, 5, 2, 0]}
      onComplete={() => {
        return { shouldRepeat: false, delay: 0 }; // repeat animation in 1.5 seconds
      }}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );
};

export default StartGameTimer;
