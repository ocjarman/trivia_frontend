import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setOpenStartGamePopup } from "../../store/triviaSlice";
import StartGameTimer from "./StartGameTimer";

export default function StartGamePopup() {
  const open = useSelector((state) => state.trivia.openStartGamePopup);
  const playerIsAlone = useSelector((state) => state.trivia.playerIsAlone);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setOpenStartGamePopup(false));
  };

  return (
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
          <StartGameTimer />
        </DialogContent>
      </>
    </Dialog>
  );
}
