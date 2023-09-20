import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Container, Tab, Tabs} from "@mui/material";
import {useState} from "react";
import {Link, Outlet} from "react-router-dom";

export default function HeaderBar() {
    const [router, setRoute] = useState("/home");
    const handleChange = (event, newValue) => {
        setRoute(newValue)
    }

    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                            <Tabs value={router} onChange={handleChange}>
                                <Tab label="Home" value={"/home"} to="/home" component={Link}/>
                                <Tab label="Links" value={"/links"} to="/links" component={Link}/>
                            </Tabs>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <br />
            <Container maxWidth={"xl"}>
                <Outlet/>
            </Container>
        </>
    );
}