import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ChangePassword from "../auth/ChangePassword";

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("Logout cliked");
        navigate("/login");
    }
    return(
        <div>
            <Grid container>
                <Grid item sm={4} sx={{backgroundColor: "gray", padding: 5, color: "white"}}>
                    <Typography variant="h4">Email: sugam@gmail.com</Typography>
                    <Typography variant="h6">Name: Sugam</Typography>
                    <Button variant="contained" color="warning" onClick={handleLogout}  sx={{mt:8}}>Logout</Button>
                </Grid>
                <Grid item sm={8}>
                   <ChangePassword />
                </Grid>
            </Grid>
        </div>
    )
 }

export default Dashboard;