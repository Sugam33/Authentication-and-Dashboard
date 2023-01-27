import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const SendPasswordResetEmail = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
        }
        if(actualData.email){
            console.log(actualData)
            document.getElementById("password-reset-form").reset();
            toast.success("Reset email sent, check your email")
        }
        else{
            toast.warn("Please provide a valid email");
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

           <Grid container justifyContent="center">
                <Grid item sm={6} xs = {12}>
            <Box component="form" noValidate sx={{mt:2}} id="password-reset-form" onSubmit={handleSubmit}>
                <TextField  margin="normal" required fullWidth id="email" name="email" label="Enter Email"/>
                <Box textAlign="center" sx={{mt:3, mb:2, px:5}}>
                    <Button type="submit" variant="contained">Send Password Reset</Button>
                </Box> 
            </Box>
                </Grid>
           </Grid>
        </div>
    )
}

export default SendPasswordResetEmail;