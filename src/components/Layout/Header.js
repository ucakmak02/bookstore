import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Button,
    Checkbox,
    IconButton
} from '@material-ui/core';


import MenuIcon from '@material-ui/icons/Menu';

import { Link } from "react-router-dom";
import { AuthContext } from "../../context";

const useStyles = makeStyles((theme) => ({
    toolbarStyle: {
        backgroundColor: '#666102',
    },
    leftSection: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 20,
    },
    rightSection: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
}));

export default function TopNavBar({ name }) {
    const classes = useStyles();
    // const [LoggedIn,setLoggedIn] = useState(false)
    const [checked, setChecked] = useState(true);
    const [LoggedIn, setLoggedIn] = useContext(AuthContext);

    return (
        <Box className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbarStyle}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {name || 'Nameless'}
                    </Typography>
                    <div className={classes.leftSection}>
                        <Button component={Link} to={'/'} color="inherit">HOME</Button>
                        <Button className={classes.lastButton} component={Link} to={'/view'} color="inherit"> VIEW</Button>
                    </div>
                    <div className={classes.rightSection}>
                        {LoggedIn &&
                            <Button component={Link} to={'/addNewProduct'} color="inherit"> Add New Product</Button>
                        }
                        <Checkbox
                            checked={checked}
                            onChange={() => { setChecked(!checked); setLoggedIn(!LoggedIn) }}
                            color='default'
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        <Button component={Link} to={'/login'} color="inherit"> LOGIN</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}


