import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
const MessageInput = ({ setMessage, sendMessage, message }) => {
  return (
    <form className="form">
      <TextField
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
      />
      <Button
        className="sendButton"
        variant="contained"
        onClick={(e) => sendMessage(e)}
      >
        Send
      </Button>
    </form>
  );
};

export default MessageInput;
