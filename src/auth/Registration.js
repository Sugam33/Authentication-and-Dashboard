import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Registration = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      confirmpassword: data.get("confirmpassword"),
      tc: data.get("tc")
    };
    if (actualData.name &&  actualData.email && actualData.password && actualData.confirmpassword && actualData.tc !== null)  
    {
        if(actualData.password === actualData.confirmpassword)
        {
            console.log(actualData);
            document.getElementById("register-form").reset();
            toast.success("data entered");
          } else {
            toast.warn("Passwords doesnot match");
          }
    }
    else{
        toast.warn("All fields required");
    }
  };

  return (
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
        theme="light"
      />

      <Box
        component="form"
        noValidate
        sx={{ mt: 2 }}
        id="register-form"
        onSubmit={handleSubmit}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          name="name"
          label="Enter Name"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          label="Enter Email"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          name="password"
          label="Enter Password"
          type="password"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="confirmpassword"
          name="confirmpassword"
          label="Confirm Password"
          type="password"
        />
        <FormControlLabel
          control={<Checkbox value="agree" name="tc" id="tc" color="primary" />}
          label="I accept the terms and conditions."
        />
        <Box textAlign="center" sx={{ mt: 3, mb: 2, px: 5 }}>
          <Button type="submit" variant="contained">
            Register
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Registration;
