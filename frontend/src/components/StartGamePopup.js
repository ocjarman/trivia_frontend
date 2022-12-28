import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { setGameStatus } from "../store/triviaSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function StartGamePopup() {
  const [open, setOpen] = React.useState(false);
  const [playerNotAlone, setPlayerNotAlone] = useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
    if (users.length > 1) {
      setPlayerNotAlone(true);
    } else {
      setPlayerNotAlone(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const users = useSelector((state) => state.users.users);

  const startGame = () => {
    dispatch(setGameStatus("playing"));
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Play Trivia!
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        {playerNotAlone && (
          <>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                The game will begin in 1 minute. You will have 10 seconds to
                complete each question.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={startGame}>Lets go!</Button>
              <Button onClick={handleClose} autoFocus>
                I'm not ready.
              </Button>
            </DialogActions>
          </>
        )}

        {!playerNotAlone && (
          <>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                You can't play against yourself! Invite a friend!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                Aww ok...
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
}
