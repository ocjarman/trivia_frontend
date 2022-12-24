import React from "react";
import SingleMessage from "./SingleMessage";

const Messages = ({ messages, name }) => {
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
