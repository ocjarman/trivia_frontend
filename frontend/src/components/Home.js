import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setName, setRoom } from "../store/newUserSlice";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styles from "./Home.styles";

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
    <div style={styles.sx.HomeContainer}>
      <div style={styles.sx.LoginContainer}>
        <Typography variant="h1" gutterBottom>
          Trivia
        </Typography>

        <form onSubmit={navigateToRoom} style={styles.sx.FormContainer}>
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
  );
};

export default Home;
