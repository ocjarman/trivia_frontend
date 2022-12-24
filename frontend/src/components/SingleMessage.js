import React from "react";
const moment = require("moment");

console.log();

const SingleMessage = ({ message: { text, user }, name }) => {
  let sentByUser = false;
  let sentByFriend = false;
  let isAdmin = false;

  if (user === "admin") {
    isAdmin = true;
    sentByUser = false;
  }

  //   if sent by admin

  if (user.name === name && isAdmin === false) {
    sentByUser = true;
  }

  if (user.name !== name && isAdmin === false) {
    sentByFriend = true;
  }

  const adminTextStyle = {
    textAlign: "center",
    color: "darkGray",
  };
  const adminTimeStyle = {
    textAlign: "center",
    color: "darkGray",
    fontSize: "10px",
  };
  const chatBubbleSent = {
    display: "flex",
    backgroundColor: "teal",
    color: "white",
    borderRadius: "20px 20px 3px 20px",
    textAlign: "right",
    padding: "2%",
    height: "auto",
    width: "auto",
    marginRight: "0",
  };

  const chatBubbleReceive = {
    backgroundColor: "#303030",
    color: "white",
    borderRadius: "20px 20px 20px 3px",
    textAlign: "left",
    padding: "2%",
    height: "auto",
    maxWidth: "75%",
    marginLeft: "0",
  };
  const chatBubbleName = {
    color: "gray",
    fontSize: "10px",
    textAlign: "left",
    marginLeft: "3%",
  };
  const chatBubbleYou = {
    color: "gray",
    fontSize: "10px",
    textAlign: "left",
    marginLeft: "3%",
  };

  //if user === 'admin', send gray text message in center of chat

  return (
    //if message sent -- send blue bubble with 'you'
    <>
      {sentByUser && (
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column",
          }}
        >
          <p style={chatBubbleSent}>{text}</p>
          <p style={chatBubbleYou}>you - {moment().format("h:mm a")}</p>
        </div>
      )}
      {/* // if message received -- send gray bubble with name */}
      {sentByFriend && (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <p style={chatBubbleName}>
            {user.name} - {moment().format("h:mm a")}
          </p>
          <p style={chatBubbleReceive}>{text}</p>
        </div>
      )}

      {isAdmin && (
        <>
          <p style={adminTextStyle}>{text}</p>
          <p style={adminTimeStyle}>{moment().format("h:mm a")}</p>
        </>
      )}
    </>
  );
};

export default SingleMessage;
