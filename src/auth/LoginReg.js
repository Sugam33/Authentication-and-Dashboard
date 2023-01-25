import { Card, Grid, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import pic1 from "../images/pic1.png"

const TabPanel = (props) => {
    const {children, value, index} = props;
    console.log(props);
    return(
        <div role='tabpanel' hidden={value !== index}>
            {
                value === index && (
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}

const LoginReg = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return(
        <div>
            <Grid container sx={{height: '90vh'}}>
                <Grid item lg={7} sm={5} sx={{
                    backgroundImage:`url(${pic1})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    display:{xs:'none', sm:'block'}
                }}>
                </Grid>

                <Grid item lg={5} sm={7} xs={12}>
                    <Card sx={{width:'100%', height:'100%'}}>
                        <Box>
                            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                                <Tabs value={value} textColor="secondary" onChange={handleChange}>
                                    <Tab label='Login' sx={{textTransform:'none', fontWeight:'bold', fontSize:'20px'}}></Tab>
                                    <Tab label='Register' sx={{textTransform:'none', fontWeight:'bold', fontSize:'20px'}}></Tab>
                                </Tabs>                                              
                            </Box>
                            <TabPanel value={value} index={0}>User Login</TabPanel>
                            <TabPanel value={value} index={1}>Register</TabPanel>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default LoginReg;