import React from "react";

const SingleMessage = ({ message: { text, user } }) => {
  return (
    <div>
      <p>
        {user.name}: {text}
      </p>
    </div>
  );
};

export default SingleMessage;
