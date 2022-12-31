import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
const RoomAppBar = ({ handleExit, roomId, name }) => {
  const navItems = ["Home", "About", "Contact"];

  console.log(typeof roomId, name);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Stack In The Box
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {roomId !== undefined || name !== undefined ? (
              <>
                <Button sx={{ color: "#fff" }}>Room Id: {roomId}</Button>
                <Button sx={{ color: "#fff" }}>{name}</Button>
                <Button href={"/"} sx={{ color: "#fff" }} onClick={handleExit}>
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
