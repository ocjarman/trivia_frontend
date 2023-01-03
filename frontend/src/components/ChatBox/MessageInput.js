import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "../Room.styles";
const MessageInput = ({ setMessage, sendMessage, message }) => {
  const handleClearInput = (e) => {
    e.preventDefault();
    e.target.value = "";
  };

  return (
    <form
      className="form"
      onSubmit={handleClearInput}
      style={styles.sx.MessageInput}
    >
      <TextField
        type="text"
        placeholder="Type a message..."
        value={message || ""}
        onChange={({ target: { value } }) => setMessage(value)}
      />
      <Button
        className="sendButton"
        variant="contained"
        style={{ backgroundColor: "#5A4AE3" }}
        type="submit"
        onClick={(e) => sendMessage(e)}
      >
        Send
      </Button>
    </form>
  );
};

export default MessageInput;
