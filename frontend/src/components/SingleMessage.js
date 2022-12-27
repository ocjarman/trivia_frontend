import React from "react";
import styles from "./SingleMsg.styles";
const moment = require("moment");

const SingleMessage = ({ message: { text, user }, name }) => {
  let sentByUser = false;
  let sentByFriend = false;
  let isAdmin = false;

  // user sending msg determines style of text on UI
  if (user === "admin") {
    isAdmin = true;
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
        <div style={styles.sx.SentByUser}>
          <p style={styles.sx.ChatBubbleSent}>{text}</p>
          <p style={styles.sx.ChatBubbleName}>
            you - {moment().format("h:mm a")}
          </p>
        </div>
      )}
      {sentByFriend && (
        <div style={styles.sx.SentByFriend}>
          <p style={styles.sx.ChatBubbleName}>
            {user.name} - {moment().format("h:mm a")}
          </p>
          <p style={styles.sx.ChatBubbleReceive}>{text}</p>
        </div>
      )}
      {isAdmin && (
        <>
          <p style={styles.sx.AdminText}>{text}</p>
          <p style={styles.sx.AdminTime}>{moment().format("h:mm a")}</p>
        </>
      )}
    </>
  );
};

export default SingleMessage;
