import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector } from "react-redux";
import StartGameTimer from "./StartGameTimer";

export default function StartGamePopup() {
  const open = useSelector((state) => state.trivia.openStartGamePopup);

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
