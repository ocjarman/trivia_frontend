const styles = {
  sx: {
    AdminText: {
      textAlign: "center",
      color: "darkGray",
    },
    GameManager: {
      textAlign: "center",
      color: "red",
    },
    AdminTime: {
      textAlign: "center",
      color: "darkGray",
      fontSize: "10px",
    },
    ChatBubbleSent: {
      display: "flex",
      backgroundColor: "#5A4AE3",
      color: "white",
      borderRadius: "20px 20px 3px 20px",
      textAlign: "right",
      padding: "2%",
      height: "auto",
      width: "auto",
      marginRight: "0",
    },
    ChatBubbleReceive: {
      backgroundColor: "#FEFEFE",
      color: "#5A4AE3",
      borderRadius: "20px 20px 20px 3px",
      textAlign: "left",
      padding: "2%",
      height: "auto",
      width: "auto",
      marginLeft: "0",
    },
    ChatBubbleName: {
      color: "gray",
      fontSize: "10px",
      textAlign: "left",
      marginLeft: "3%",
    },
    SentByUser: {
      display: "flex",
      alignItems: "flex-end",
      flexDirection: "column",
    },
    SentByFriend: {
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
    },
  },
};

export default styles;
