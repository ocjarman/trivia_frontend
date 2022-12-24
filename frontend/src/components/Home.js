import React from "react";
import { useNavigate } from "react-router-dom";
import { setUsers } from "../store/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { setName, setRoom } from "../store/newUserSlice";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import io from "socket.io-client";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

const socket = io.connect("http://localhost:4000");

const Home = () => {
  const room = useSelector((state) => state.newUser.room);
  const name = useSelector((state) => state.newUser.name);
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
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 500,
          height: "auto",
        },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p>Welcome to Trivia </p>
          <form onSubmit={navigateToRoom}>
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
      </Paper>
    </Box>

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
