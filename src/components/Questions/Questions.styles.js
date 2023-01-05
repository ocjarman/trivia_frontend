const styles = {
  sx: {
    QuestionContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      justifyItems: "center",
      alignContent: "center",
      alignItems: "center",
      width: "300px",
    },
    SelectedAnswer: {
      width: "auto",
      fontSize: "10px",
      backgroundColor: "white",
      margin: "2%",
      color: "#5A4AE3",
      padding: "10px",
      border: "2px solid #5A4AE3",
    },
    NonselectedAnswer: {
      width: "auto",
      fontSize: "10px",
      backgroundColor: "#5A4AE3",
      margin: "2%",
      color: "white",
      padding: "10px",
    },
    QuestionPaper: {
      padding: "5%",
      display: "flex",
      flexDirection: "column",
    },
    Stepper: {
      pt: 3,
      pb: 5,
      display: "flex",
      flexDirection: "row",
      width: "auto",
      padding: "20px",
      margin: "20px",
    },
    ResetButton: {
      backgroundColor: "#5A4AE3",
      width: "200px",
      color: "#EFEFEF",
    },
    StepBox: {
      width: "auto",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      justifyItems: "center",
      alignItems: "center",
    },
  },
};

export default styles;
