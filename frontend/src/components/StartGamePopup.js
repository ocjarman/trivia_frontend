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
import { setOpenStartGamePopup, setPlayerNotAlone } from "../store/triviaSlice";
import Countdown from "react-countdown";
import StartGameTimer from "./StartGameTimer";

export default function StartGamePopup() {
  const open = useSelector((state) => state.trivia.openStartGamePopup);
  const playerNotAlone = useSelector((state) => state.trivia.playerNotAlone);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  // const handleClickOpen = () => {
  //   dispatch(setOpenStartGamePopup(true));

  //   if (users.length > 1) {
  //     dispatch(setPlayerNotAlone(true));
  //   } else {
  //     dispatch(setPlayerNotAlone(false));
  //   }
  // };

  const handleClose = () => {
    dispatch(setOpenStartGamePopup(false));
  };

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <>
          <DialogTitle id="alert-dialog-title">
            {"Game will begin in..."}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <StartGameTimer />
            </DialogContentText>
          </DialogContent>
        </>

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
