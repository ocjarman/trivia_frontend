import React from "react";
import SingleMessage from "./SingleMessage";

const Messages = ({ messages, name }) => {
  return (
    <div style={{ padding: "1%" }}>
      {messages?.map((message, i) => (
        <SingleMessage key={i} message={message} name={name} />
      ))}
    </div>
  );
};

export default Messages;
