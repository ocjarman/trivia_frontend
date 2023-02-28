import React, { useEffect, useRef } from "react";
import SingleMessage from "./SingleMessage";
import "./chatbox.css";

const Messages = ({ messages, name }) => {
  // for auto scroll feature: From the code snippets above, lastMessageRef
  // is attached to a div tag at the bottom of the messages, and its useEffect has a
  // single dependency, which is the messages array. So, when the messages changes,
  // the useEffect for the lastMessageRef re-renders.
  const lastMessageRef = useRef(null);
  useEffect(() => {
    // on entering a room, add the admin message to the message state welcoming the user
    // listening to message from the server with socket.on
    lastMessageRef.current?.scrollIntoView(true);
  });
  return (
    <>
      <div className="messagePadding">
        {messages?.map((message, i) => (
          <SingleMessage key={i} message={message} name={name} />
        ))}
        <div ref={lastMessageRef} />
      </div>
    </>
  );
};

export default Messages;
