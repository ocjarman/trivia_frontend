import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDesktop } from "../../store/usersSlice";

const StartGameTimer = () => {
  const dispatch = useDispatch();
  const isDesktop = useSelector((state) => state.users.isDesktop);

  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth > 1450) {
      dispatch(setDesktop(true));
    } else {
      dispatch(setDesktop(false));
    }

    const updateMedia = () => {
      if (window.innerWidth > 1450) {
        dispatch(setDesktop(true));
      } else {
        dispatch(setDesktop(false));
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <>
      {isDesktop ? (
        <CountdownCircleTimer
          isPlaying
          duration={10}
          size={100}
          colors={["#5A4AE3", "#685AE4", "#857BE1", "#BBB5F5"]}
          colorsTime={[7, 5, 2, 0]}
          onComplete={() => {
            return { shouldRepeat: false, delay: 0 }; // repeat animation in 1.5 seconds
          }}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      ) : (
        <CountdownCircleTimer
          isPlaying
          duration={10}
          colors={["#5A4AE3", "#685AE4", "#857BE1", "#BBB5F5"]}
          colorsTime={[7, 5, 2, 0]}
          size={50}
          onComplete={() => {
            return { shouldRepeat: false, delay: 0 }; // repeat animation in 1.5 seconds
          }}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      )}
    </>
  );
};

export default StartGameTimer;
