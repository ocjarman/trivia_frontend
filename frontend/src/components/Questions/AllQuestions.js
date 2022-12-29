import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
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
import SubmitAnswers from "./Question5";
import { setGameStatus } from "../../store/triviaSlice";
import { setScore } from "../../store/newUserSlice";
const steps = ["0", "1", "2", "3", "4", "5"];

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
    case 5:
      return <SubmitAnswers />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

// moves us from one component to the next in the checkout process
export default function AllQuestions() {
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.trivia.selectedAnswer);
  const questions = useSelector((state) => state.trivia.questions);
  const score = useSelector((state) => state.newUser.score);

  const questionsAndAnswers = [];
  questions.forEach((question) =>
    questionsAndAnswers.push({
      id: question.id,
      correct_answer: question.correct_answer,
    })
  );

  const handleNext = () => {
    if (selected === questions[activeStep].correct_answer) {
      dispatch(setScore(score + 1));
    } else {
      dispatch(setScore(score + 0));
    }

    setActiveStep(activeStep + 1);
  };

  const submitAllAnswers = async (event) => {
    event.preventDefault();
    try {
      handleNext();
    } catch (err) {
      console.log(err);
    }
  };

  const resetGame = () => {
    dispatch(setGameStatus(""));
    dispatch(setScore(0));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <Paper
          variant="outlined"
          sx={{
            padding: "5%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography component="h1" variant="h4" align="center">
            Trivia
          </Typography>
          <Stepper
            activeStep={activeStep}
            sx={{
              pt: 3,
              pb: 5,
              display: "flex",
              flexDirection: "row",
              width: "auto",
              padding: "20px",
              margin: "20px",
            }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel></StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                You lost/won here!
              </Typography>
              <Typography variant="subtitle1">
                You answered {score} / 5 questions correctly. Results here by
                user!
              </Typography>

              <Button onClick={resetGame}>
                Start Over (this link needs to restart)
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Box
                sx={{
                  width: "auto",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                {getStepContent(activeStep)}
                {activeStep < steps.length - 1 && (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{
                      mt: 3,
                      ml: 1,
                    }}
                  >
                    Next
                  </Button>
                )}
                {activeStep >= steps.length - 1 && (
                  <Button
                    variant="contained"
                    onClick={submitAllAnswers}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Finish!
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
