import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const ResetPassword = () => {
    const navigate = useNavigate();
    
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
                toast.success("Password reset successful, Redirecting to Login Page...")
                setTimeout(() => {
                    navigate("/login")
                }, 3000)
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

           <Grid  container justifyContent="center">
                <Grid item sm={6} xs = {12}>
                    <Typography variant="h2">Reset Password</Typography>
            <Box component="form" noValidate sx={{mt:2}} id="password-reset-email-form" onSubmit={handleSubmit}>
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
                    <Button type="submit" variant="contained">Save Password</Button>
                </Box> 
            </Box>
                </Grid>
           </Grid>
        </div>
    )
}
export default ResetPassword;