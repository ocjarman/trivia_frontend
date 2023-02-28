import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setName, setRoomId } from "../../store/newUserSlice";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./home.css";
import RoomAppBar from "../RoomView/RoomAppBar";
import logoImage from "../../static/images/logo4.png";

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
    <div className="homeContainer">
      <RoomAppBar />
      <div className="loginContainer">
        <img src={logoImage} alt={""} width="50%" />

        <form onSubmit={navigateToRoom} className="formContainer">
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

          <button type="submit" variant="contained" className="joinRoomButton">
            Join Room
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
