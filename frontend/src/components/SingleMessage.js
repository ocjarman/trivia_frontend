import React from "react";

const SingleMessage = ({ message: { text, user }, name }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default SingleMessage;
