const styles = {
  sx: {
    RoomContainer: {
      margin: "5%",
      padding: "2%",
      // display: "flex",
    },
    ChatBox: {
      marginTop: "20%",
      marginLeft: "20%",
      marginRight: "20%",
      height: "300px",
      overflowX: "auto",
      width: "300px",
    },
    TriviaBox: {
      height: "500px",
      width: "500px",
      margin: "20%",
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    UsersContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      height: "200px",
      overflowX: "auto",
      margin: "20%",
    },
    MessageInput: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      marginBottom: "20%",
      marginLeft: "20%",
      marginRight: "20%",
      marginTop: "2%",
    },
    ToolBar: {
      backgroundColor: "#5A4AE3",
      display: "flex",
      justifyContent: "space-between",
    },
    ToolBarButton: { color: "#EFEFEF", fontSize: "150%" },
    LeaveButton: {
      color: "#5A4AE3",
      fontSize: "100%",
      backgroundColor: "#EFEFEF",
    },
  },
};

export default styles;
