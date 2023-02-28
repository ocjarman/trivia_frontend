import React from "react";
import "./chatbox.css";
const moment = require("moment");

const SingleMessage = ({ message: { text, user }, name }) => {
  let sentByUser = false;
  let sentByFriend = false;
  let isAdmin = false;
  let gameManager = false;

  // user sending msg determines style of text on UI
  if (user === "admin") {
    isAdmin = true;
    sentByUser = false;
    gameManager = false;
  }
  if (user === "game_manager") {
    gameManager = true;
    isAdmin = false;
    sentByUser = false;
  }
  if (user.name === name && isAdmin === false) {
    sentByUser = true;
  }
  if (user.name !== name && isAdmin === false) {
    sentByFriend = true;
  }

  return (
    <>
      {sentByUser && (
        <div className="msgByUser">
          <p className="chatBubbleSent">{text}</p>
          <p className="chatBubbleName">you - {moment().format("h:mm a")}</p>
        </div>
      )}
      {sentByFriend && (
        <div className="sentByFriend">
          <p className="chatBubbleName">
            {user.name} - {moment().format("h:mm a")}
          </p>
          <p className="chatBubbleReceive">{text}</p>
        </div>
      )}
      {isAdmin && (
        <>
          <p className="adminText">{text}</p>
          <p className="adminTime">{moment().format("h:mm a")}</p>
        </>
      )}
      {gameManager && (
        <>
          <p className="gameManager">{text}</p>
          <p className="adminTime">{moment().format("h:mm a")}</p>
        </>
      )}
    </>
  );
};

export default SingleMessage;
