import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import logoIcon from "../static/images/logo3.png";

import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const RoomAppBar = ({ handleExit, roomId, name }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar
          style={{
            backgroundColor: "#5A4AE3",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {" "}
          <img src={logoIcon} alt={""} width="100px" />
          {roomId !== undefined || name !== undefined ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button sx={{ color: "#EFEFEF", fontSize: "150%" }}>
                Room Id: {roomId}
              </Button>
              <Button sx={{ color: "#EFEFEF", fontSize: "150%" }}>
                {name}
              </Button>
            </div>
          ) : null}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {roomId !== undefined || name !== undefined ? (
              <>
                <Button
                  href={"/"}
                  sx={{
                    color: "#5A4AE3",
                    fontSize: "100%",
                    backgroundColor: "#EFEFEF",
                  }}
                  variant="contained"
                  onClick={handleExit}
                >
                  Leave Room
                </Button>
              </>
            ) : null}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default RoomAppBar;
