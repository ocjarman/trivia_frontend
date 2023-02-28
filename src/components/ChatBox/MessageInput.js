import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./chatbox.css";

const MessageInput = ({ setMessage, sendMessage, message }) => {
  const handleClearInput = (e) => {
    e.preventDefault();
    e.target.value = "";
  };

  return (
    <form className="messageInputForm" onSubmit={handleClearInput}>
      <TextField
        type="text"
        placeholder="Type a message..."
        value={message || ""}
        onChange={({ target: { value } }) => setMessage(value)}
      />
      <Button
        className="sendMessageButton"
        variant="contained"
        type="submit"
        onClick={(e) => sendMessage(e)}
      >
        Send
      </Button>
    </form>
  );
};

export default MessageInput;
