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
import styles from "./Room.styles";
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
    console.log(window.innerWidth);
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
        <Toolbar style={styles.sx.ToolBar}>
          {" "}
          {isDesktop && <img src={logoIcon} alt={""} width="100px" />}
          {roomId !== undefined && name !== undefined && isDesktop ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: "1vw",
              }}
            >
              <div>
                <Button sx={styles.sx.ToolBarButton}>Room Id: {roomId}</Button>
                <Button sx={styles.sx.ToolBarButton}>Welcome, {name}!</Button>
              </div>
              <div>
                <ChatBubbleOutlineRoundedIcon
                  style={{
                    padding: "10%",
                    fontSize: "50px",
                  }}
                  onClick={toggleChat}
                />
                <PeopleOutlineRoundedIcon
                  style={{
                    padding: "10%",
                    fontSize: "50px",
                  }}
                  onClick={toggleUsers}
                />
              </div>
            </div>
          ) : null}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {roomId !== undefined && name !== undefined && isDesktop ? (
              <>
                {/* <ExitToAppIcon onClick={handleExit} /> */}
                <Button
                  href={"/room"}
                  sx={styles.sx.LeaveButton}
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                justifyItems: "center",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "50%",
                width: "auto",
                margin: "auto",
              }}
            >
              <div>
                <h6>
                  Welcome to Room {roomId}, {name}!
                </h6>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  justifyItems: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                  fontSize: "50%",
                  width: "auto",
                  gap: 10,
                }}
              >
                <ChatBubbleOutlineRoundedIcon
                  style={{
                    fontSize: "40px",
                  }}
                  onClick={toggleChat}
                />
                <PeopleOutlineRoundedIcon
                  style={{
                    fontSize: "40px",
                  }}
                  onClick={toggleUsers}
                />
                <Button
                  href={"/room"}
                  sx={styles.sx.LeaveMobile}
                  variant="contained"
                  onClick={handleExit}
                >
                  <ExitToAppIcon />
                </Button>
              </div>
            </div>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default RoomAppBar;
