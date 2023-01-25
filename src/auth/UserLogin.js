import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

const UserLogin = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div>
            <Box component="form" noValidate sx={{mt:2}} id="login-form" onSubmit={handleSubmit}>
                <TextField  margin="normal" required fullWidth id="email" name="email" label="Enter Email"/>
                <TextField  margin="normal" required fullWidth id="password" name="password" label="Enter Password" type="password"/>
                <Box textAlign="center" sx={{mt:3, mb:2, px:5}}>
                    <Button type="submit" variant="contained">Login</Button>
                </Box>
                <NavLink to={"/"}>Forgot Password</NavLink>
            </Box>
        </div>
    )
}

export default UserLogin;