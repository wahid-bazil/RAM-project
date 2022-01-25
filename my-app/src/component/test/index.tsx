import Connecteur from "../stepper/connecter"
import IconLabel from "../stepper/icon_label"
import { HiOutlineIdentification } from 'react-icons/hi';
import { MdAirlineSeatReclineExtra } from 'react-icons/md';
import { MdOutlineUpdate } from 'react-icons/md';
import { MdPayment } from 'react-icons/md';
import { MdOutlineDownloadDone } from 'react-icons/md';
import Accordion from '../accordion/index'
import AccordionSummary from '@mui/material/AccordionSummary';

import * as React from 'react';
import Header from '../header';
import { makeStyles } from '@mui/styles';
import FormAuth from "./form";




const Test = () => {


    return (
        <div className="authorization container">
            <div className="row">
                <div className="col-6 ">
                    <div className="logo">
                        <img src="./assets/images/logo-main.svg" />
                    </div>
                    <h2><span>Se</span> connecter a votre compte</h2>
                    <FormAuth/>
                </div>
                <div className="col-6 p-0">
                    <img src="./assets/images/Untitled-1-01.jpg" alt="" />
                </div>
            </div>
        </div>

    )
}
export default Test