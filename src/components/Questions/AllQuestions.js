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
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./questions.css";
import { setActiveStep, setShowQuestions } from "../../store/triviaSlice";

const steps = ["0", "1", "2", "3", "4"];

function getStepContent(step, socket) {
  switch (step) {
    case 0:
      return <Question1 socket={socket} />;
    case 1:
      return <Question2 socket={socket} />;
    case 2:
      return <Question3 socket={socket} />;
    case 3:
      return <Question4 socket={socket} />;
    case 4:
      return <Question5 socket={socket} />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

// moves us from one component to the next in the checkout process
export default function AllQuestions({ socket }) {
  const activeStep = useSelector((state) => state.trivia.activeStep);
  const dispatch = useDispatch();
  const currentResults = useSelector((state) => state.trivia.currentResults);
  const isDesktop = useSelector((state) => state.users.isDesktop);

  socket.on("navigatingToNextQ", () => {
    const nextStep = activeStep + 1;
    if (nextStep <= 5) {
      dispatch(setActiveStep(nextStep));
    }
  });

  const resetGame = () => {
    dispatch(setShowQuestions(false));
    socket.emit("resetGame");
  };

  return (
    <ThemeProvider theme={theme}>
      {isDesktop && (
        <Container component="main">
          <Paper variant="outlined" className="questionPaper">
            <Typography component="h1" variant="h4" align="center">
              Trivia
            </Typography>

            <Stepper activeStep={activeStep} className="stepper">
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel></StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <div>
                <Typography variant="h5" gutterBottom>
                  {currentResults?.map((result, i) => (
                    <p key={i}>
                      {result.user}: {result.score} point(s)
                    </p>
                  ))}
                </Typography>

                <Button onClick={resetGame} className="resetButton">
                  Play again!
                </Button>
              </div>
            ) : (
              <Box className="stepBox">
                {getStepContent(activeStep, socket)}
                {activeStep < steps.length - 1 && (
                  <CountdownCircleTimer
                    isPlaying
                    duration={10}
                    colors={["#5A4AE3", "#685AE4", "#857BE1", "#BBB5F5"]}
                    colorsTime={[7, 5, 2, 0]}
                    size={50}
                    onComplete={() => {
                      return { shouldRepeat: true, delay: 0 }; // repeat animation in 1.5 seconds
                    }}
                  >
                    {({ remainingTime }) => remainingTime}
                  </CountdownCircleTimer>
                )}
                {activeStep >= steps.length - 1 && (
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
              </Box>
            )}
          </Paper>
        </Container>
      )}

      {!isDesktop && (
        <Container component="main" className="mobileContainer">
          <Paper variant="outlined" className="questionPaper">
            <Typography component="h1" variant="h4" align="center">
              Trivia
            </Typography>

            <Stepper activeStep={activeStep} className="stepper">
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel></StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <div>
                <Typography variant="h5" gutterBottom>
                  {currentResults?.map((result, i) => (
                    <p key={i}>
                      {result.user}: {result.score} point(s)
                    </p>
                  ))}
                </Typography>

                <Button onClick={resetGame} className="resetButton">
                  Play again!
                </Button>
              </div>
            ) : (
              <Box className="stepBox">
                {getStepContent(activeStep, socket)}
                {activeStep < steps.length - 1 && (
                  <CountdownCircleTimer
                    isPlaying
                    duration={10}
                    colors={["#5A4AE3", "#685AE4", "#857BE1", "#BBB5F5"]}
                    colorsTime={[7, 5, 2, 0]}
                    size={50}
                    onComplete={() => {
                      return { shouldRepeat: true, delay: 0 }; // repeat animation in 1.5 seconds
                    }}
                  >
                    {({ remainingTime }) => remainingTime}
                  </CountdownCircleTimer>
                )}
                {activeStep >= steps.length - 1 && (
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
              </Box>
            )}
          </Paper>
        </Container>
      )}
    </ThemeProvider>
  );
}
