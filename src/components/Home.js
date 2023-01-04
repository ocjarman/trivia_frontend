import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setName, setRoomId } from "../store/newUserSlice";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./Home.styles";
import RoomAppBar from "./RoomAppBar";
import logoImage from "../static/images/logo2.png";

const Home = () => {
  const roomId = useSelector((state) => state.newUser.roomId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRoom = (event) => {
    dispatch(setRoomId(event.target.value));
  };
  const handleName = (event) => {
    dispatch(setName(event.target.value));
  };

  const navigateToRoom = () => {
    navigate(`/room/${roomId}`);
  };

  return (
    <div style={styles.sx.HomeContainer}>
      <RoomAppBar />
      <div style={styles.sx.LoginContainer}>
        <img src={logoImage} alt={""} width="400px" />

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

          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#5A4AE3" }}
          >
            Join Room
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Home;
