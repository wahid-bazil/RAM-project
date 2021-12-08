import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ListItemIcon from '@mui/material/Select';
import React, { MouseEventHandler } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { FaHashtag } from 'react-icons/fa';
import { makeStyles } from '@mui/styles';
import {FiPhoneCall} from 'react-icons/fi';
import {MdOutlineMail} from 'react-icons/md';





function Header() {
    const image = ['./assets/images/logo.png', './assets/images/oneworld-logo.png']

    return (
        <header >

            <div className=" logo float-start d-flex justify-content-between align-items-center ">
                <div className=" ram ">
                    <img src={image[0]} />
                </div>
                <div className="vl"></div>
                <div className=" one-world ">
                    <img src={image[1]} alt='' />
                </div>
            </div>
            <div className="right-header float-end ">
                <ul>
                    <li className="d-flex flex-column justify-content-end align-items-around ">
                        <div>
                            Surclassement Dernière minute
                        </div>
                        <div className="hl"></div>
                    </li>
                    <li className="d-flex align-items-center">
                        <Select
                            className="select"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"

                            label="Age"

                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>

                        </Select>
                    </li>
                    <li className="d-flex align-items-center">
                        <Select
                            className="select"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"

                            label="Age"

                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>

                        </Select>
                    </li>
                    <li className="d-flex align-items-center">  
                        <i><FiPhoneCall/></i>
                    </li>
                    <li className="d-flex align-items-center">  
                        <i>
                            <MdOutlineMail/>    
                        </i>
                    </li>
                </ul>

            </div>

        </header>
    );
}
export default Header