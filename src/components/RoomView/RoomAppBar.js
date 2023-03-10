import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { setShowChat } from "../../store/messagesSlice";
import { setShowUsers } from "../../store/usersSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import logoIcon from "../../static/images/logo3.png";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import "./roomView.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useEffect } from "react";
import { setDesktop } from "../../store/usersSlice";

const RoomAppBar = ({ handleExit, roomId, name }) => {
  const isDesktop = useSelector((state) => state.users.isDesktop);
  const dispatch = useDispatch();

  const toggleUsers = () => {
    dispatch(setShowUsers((val) => !val));
  };
  const toggleChat = () => {
    dispatch(setShowChat((val) => !val));
  };

  useEffect(() => {
    if (window.innerWidth > 1450) {
      dispatch(setDesktop(true));
    } else {
      dispatch(setDesktop(false));
    }

    const updateMedia = () => {
      if (window.innerWidth > 1450) {
        dispatch(setDesktop(true));
      } else {
        dispatch(setDesktop(false));
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar className="toolBar">
          {" "}
          {isDesktop && <img src={logoIcon} alt={""} width="100px" />}
          {roomId !== undefined && name !== undefined && isDesktop ? (
            <div className="divInToolbar">
              <div>
                <Button className="toolBarButton">Room Id: {roomId}</Button>
                <Button className="toolBarButton">Welcome, {name}!</Button>
              </div>
              <div>
                <ChatBubbleOutlineRoundedIcon
                  className="icon"
                  onClick={toggleChat}
                />
                <PeopleOutlineRoundedIcon
                  className="icon"
                  onClick={toggleUsers}
                />
              </div>
            </div>
          ) : null}
          <Box className="boxInRoom">
            {roomId !== undefined && name !== undefined && isDesktop ? (
              <>
                <Button
                  href={"/trivia_frontend"}
                  className="leaveButton"
                  variant="contained"
                  onClick={handleExit}
                >
                  Leave Room
                </Button>
              </>
            ) : null}
          </Box>
          {/* MOBILE VIEW BELOW */}
          {roomId !== undefined && name !== undefined && !isDesktop ? (
            <div className="mobileToolBar">
              <h2>
                Welcome to Room {roomId}, {name}!
              </h2>
              <div className="mobileContainer">
                <ChatBubbleOutlineRoundedIcon
                  className="fortyFont"
                  onClick={toggleChat}
                />
                <PeopleOutlineRoundedIcon
                  className="fortyFont"
                  onClick={toggleUsers}
                />
                <a href={"/trivia_frontend"}>
                  <button
                    className="leaveMobile"
                    variant="contained"
                    onClick={handleExit}
                  >
                    <ExitToAppIcon />
                  </button>
                </a>
              </div>
            </div>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default RoomAppBar;
