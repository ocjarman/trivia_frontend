import React from "react";
import SingleMessage from "./SingleMessage";

const Messages = ({ messages, name }) => {
  console.log("messages", messages);
  return (
    <div>
      {messages?.map((message, i) => (
        <div key={i}>
          <SingleMessage message={message} name={name} />
        </div>
      ))}
    </div>
  );
};

export default Messages;
