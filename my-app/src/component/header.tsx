import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ListItemIcon from '@mui/material/Select';
import React, { MouseEventHandler } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { FaHashtag } from 'react-icons/fa';
import { makeStyles } from '@mui/styles';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineMail } from 'react-icons/md';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { GiAirplaneDeparture } from 'react-icons/gi';
import { CgHashtag } from "react-icons/cg";
import { MdFamilyRestroom } from "react-icons/md";
import { BsCurrencyExchange } from "react-icons/bs";



const useStyles = makeStyles({
    root: {
        backgroundColor: "white",
        padding: '0px',
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: 'none',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            padding: '0px',
        },
    }
});



function Header() {
    const image = ['./assets/images/logo.png', './assets/images/oneworld-logo.png']
    const classes = useStyles();
    return (
        <header className="container " >
            <div className="d-flex justify-content-between">
                <div className="logo row justify-content-start align-items-center">
                    <div className="ram">
                        <img src={image[0]} />
                    </div>
                    <div className="one-world  ">
                        <img src={image[1]} />
                    </div>
                </div>
                <div className="menu ">
                    <ul>
                        <li className="menu-title d-flex align-items-center">
                            <h6>Surclassement Dernière minute</h6>
                        </li>
                        <li className="d-flex align-items-center">
                            <TextField
                                size="small"
                                className={classes.root}
                                variant="outlined"
                                select
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <i ><BsCurrencyExchange /></i>
                                        </InputAdornment>
                                    ),
                                }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </TextField>
                        </li>
                        <li className="d-flex align-items-center">
                            <TextField
                                size="small"
                                className={classes.root}


                                select
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <div className="select-icon"><img alt='' src="./assets/images/france.png" /></div>
                                        </InputAdornment>
                                    ),
                                }}

                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </TextField>
                        </li>
                        <li className="d-flex align-items-center">
                            <i><FiPhoneCall/></i>
                        </li>
                        <li className="d-flex align-items-center">
                            <i><MdOutlineMail/></i>
                        </li>

                    </ul>
                </div>
            </div>
        </header>
    );
}
export default Header