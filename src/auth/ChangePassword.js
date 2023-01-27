import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const ChangePassword = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            password: data.get('password'),
            confirmpassword: data.get('confirmpassword')
        }
        if(actualData.password && actualData.confirmpassword){
            if(actualData.password === actualData.confirmpassword){
                console.log(actualData);
                document.getElementById("password-change-form").reset();
                toast.success("Password changed successfully")
            }
            else{
                toast.warn("Password and confirm password doesnot match")
            } 
        }
        else{
            toast.warn("Please fill the given fields");
        }
    }

    return(
        <div>
            <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />

                <Box sx={{display: "flex", flexDirection: "column", flexWrap: "wrap", maxWidth: 600, mx: 4}}>
                    <Typography variant="h2">Change Password</Typography>
            <Box component="form" noValidate sx={{mt:2}} id="password-change-form" onSubmit={handleSubmit}>
            <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          name="password"
          label="Enter New Password"
          type="password"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="confirmpassword"
          name="confirmpassword"
          label="Confirm New Password"
          type="password"
        />
             <Box textAlign="center" sx={{mt:3, mb:2, px:5}}>
                    <Button type="submit" variant="contained">Update Password</Button>
                </Box> 
            </Box>
            </Box>
        </div>
    )
}

export default ChangePassword;