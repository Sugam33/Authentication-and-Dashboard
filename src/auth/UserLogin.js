import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserLogin = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
            password: data.get('password')
        }
        if(actualData.email && actualData.password){
            console.log(actualData)
            document.getElementById("login-form").reset();
            toast.success("data entered")
            navigate("/");
        }
        else{
            toast.warn("All fields required");
        }
    }


    return(
        <div>
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />

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