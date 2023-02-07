import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Sugam ko pasal
            </Typography>
            <Button
              component={NavLink}
              to="/"
              sx={{ color: "white", fontSize: "20px", textTransform: "none" }}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "red" : "" };
              }}
            >
              Home
            </Button>
            <Button
              component={NavLink}
              to="/contact"
              sx={{ color: "white", fontSize: "20px", textTransform: "none" }}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "blue" : "" };
              }}
            >
              Contact
            </Button>
            <Button
              component={NavLink}
              to="/login"
              sx={{ color: "white", fontSize: "20px", textTransform: "none" }}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "blue" : "" };
              }}
            >
              Login/Register
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
