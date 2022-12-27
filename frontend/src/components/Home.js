import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setName, setRoom } from "../store/newUserSlice";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const Home = () => {
  const room = useSelector((state) => state.newUser.room);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRoom = (event) => {
    dispatch(setRoom(event.target.value));
  };
  const handleName = (event) => {
    dispatch(setName(event.target.value));
  };

  const navigateToRoom = () => {
    navigate(`/room/${room}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        justifyItems: "center",
        height: "50vh",
        margin: "20%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10vw",
          boxShadow: "10px 5px 5px teal",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <Typography variant="h1" gutterBottom>
          Trivia
        </Typography>

        <form
          onSubmit={navigateToRoom}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <TextField
            id="outlined-basic"
            label="username"
            variant="outlined"
            placeholder="username"
            onChange={handleName}
          />
          <TextField
            id="outlined-basic"
            label="room id"
            variant="outlined"
            placeholder="room number"
            onChange={handleRoom}
          />

          <Button type="submit" variant="contained">
            Join Room
          </Button>
        </form>
      </div>
    </div>
    // </Box>

    // // <div
    // //   style={{
    // //     width: "400px",
    // //     border: "1px solid red",
    // //     display: "flex",
    // //     flexDirection: "column",
    // //     justifyContent: "center",
    // //     alignItems: "center",
    // //     justifyItems: "center",
    // //     alignContent: "flex-start",
    // //   }}
    // // >
    //   <div className="App">

    //   </div>
    // </div>
  );
};

export default Home;
