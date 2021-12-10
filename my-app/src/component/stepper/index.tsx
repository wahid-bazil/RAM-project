import * as React from 'react';
import { useState, useEffect, useRef, createRef } from "react";
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { BsCurrencyExchange } from 'react-icons/bs';
import { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import StepContent from '@mui/material/StepContent';
import Box from '@mui/material/Box';
import { HiOutlineIdentification } from 'react-icons/hi';
import { MdAirlineSeatReclineExtra } from 'react-icons/md';
import { MdOutlineUpdate } from 'react-icons/md';
import { MdPayment } from 'react-icons/md';
import { MdOutlineDownloadDone } from 'react-icons/md';
import { FaBullseye } from 'react-icons/fa';
import { borderColor, borderLeft } from '@mui/system';





const IndexStepper: React.FC<{ steps: { label: string, description: string }[], activeStep: number }> = (props) => {
    const [refs , setRefs]  = useState <React.RefObject<HTMLDivElement>[]>([]);
    const { steps, activeStep } = props;

    const icons: { [index: string]: React.ReactElement } = {
        0: <HiOutlineIdentification />,
        1: <MdOutlineUpdate />,
        2: <MdPayment />,
        3: <HiOutlineIdentification />,
        4: <HiOutlineIdentification />,
    };

    const widht = window.innerWidth;

    function connecterClasse(index: number): string {

        if (index == activeStep) {
            return 'stepper-connecter active';
        }
        else if (index < activeStep) {
            return 'stepper-connecter completed';
        }
        else {
            return 'stepper-connecter';
        }
    }

    function stepLabelIconClasse(index: number): string {
        if (index == activeStep) {
            return 'step-label-icon active';
        }
        else if (index < activeStep) {
            return 'step-label-icon completed';
        }
        else {
            return 'step-label-icon';
        }
    }
    useEffect(() => {
            let refsArr:React.RefObject<HTMLDivElement>[] =[];
        for (let index = 0; index < steps.length; index++) {
            let ref = createRef<HTMLDivElement>();
            refsArr.push(ref);
        }

        setRefs(refsArr);
    },[])
 

    const divRef = React.useRef<HTMLDivElement>(null);


    return (
        <div className="container d-flex ">
            <div className="stepper col-2">
                {steps.map((step, index) => (
                    <div>
                        <div className={stepLabelIconClasse(index)}>
                            <i>{icons[index]}</i>
                        </div>
                        <div  className={connecterClasse(index)} />
                    </div>
                ))}
            </div>



        </div>
    )

}
export default IndexStepper