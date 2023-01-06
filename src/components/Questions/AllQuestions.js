import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Question5 from "./Question5";
import { setShowQuestions, setResults } from "../../store/triviaSlice";
import { useState } from "react";
import { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../Questions/Questions.styles";

const steps = ["0", "1", "2", "3", "4"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Question1 />;
    case 1:
      return <Question2 />;
    case 2:
      return <Question3 />;
    case 3:
      return <Question4 />;
    case 4:
      return <Question5 />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

// moves us from one component to the next in the checkout process
export default function AllQuestions({ socket }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.trivia.selectedAnswer);
  const questions = useSelector((state) => state.trivia.questions);
  const results = useSelector((state) => state.trivia.results);
  const roomId = useSelector((state) => state.newUser.roomId);
  const name = useSelector((state) => state.newUser.name);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    const nextStep = activeStep + 1;
    if (selected === questions[activeStep].correct_answer) {
      const oldScore = score;
      const newScore = score + 1;
      setScore(newScore);
      if (nextStep === 5) {
        socket.emit("sendingGameResults", { name, roomId, score: newScore });
        console.log("game results sending");
      }
    }
    if (nextStep === 5 && selected !== questions[activeStep].correct_answer) {
      socket.emit("sendingGameResults", { name, roomId, score: score });
      console.log("game results sending");
    }
    setActiveStep(nextStep);
  };

  const resetGame = () => {
    dispatch(setShowQuestions(false));
  };

  console.log({ results });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <Paper variant="outlined" sx={styles.sx.QuestionPaper}>
          <Typography component="h1" variant="h4" align="center">
            Trivia
          </Typography>

          <Stepper activeStep={activeStep} sx={styles.sx.Stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel></StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <div>
              <Typography variant="h5" gutterBottom>
                You scored {score} / 5
                {results?.map((result, i) => (
                  <p key={i}>
                    {result.name}: {result.score} point(s)
                  </p>
                ))}
              </Typography>

              <Button onClick={resetGame} style={styles.sx.ResetButton}>
                Play again!
              </Button>
            </div>
          ) : (
            <Box sx={styles.sx.StepBox}>
              {getStepContent(activeStep)}
              {activeStep < steps.length - 1 && (
                <CountdownCircleTimer
                  isPlaying
                  duration={3}
                  colors={["#5A4AE3", "#685AE4", "#857BE1", "#BBB5F5"]}
                  colorsTime={[7, 5, 2, 0]}
                  size={50}
                  onComplete={() => {
                    // do your stuff here
                    handleNext();
                    return { shouldRepeat: true, delay: 0.5 }; // repeat animation in 1.5 seconds
                  }}
                >
                  {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
              )}
              {activeStep >= steps.length - 1 && (
                <CountdownCircleTimer
                  isPlaying
                  duration={3}
                  colors={["#5A4AE3", "#685AE4", "#857BE1", "#BBB5F5"]}
                  colorsTime={[7, 5, 2, 0]}
                  size={50}
                  onComplete={() => {
                    handleNext();
                    return { shouldRepeat: false, delay: 0.5 }; // repeat animation in 1.5 seconds
                  }}
                >
                  {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
              )}
            </Box>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
