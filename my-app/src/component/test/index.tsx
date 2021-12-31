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

const steps = [
    {
        label: 'step 1',
        description: 'Identification'
    },
    {
        label: 'step 2',
        description: 'Passager(s)/Vol'

    },
    {
        label: 'step 3',
        description: `Details Surclassement `,
    },
    {
        label: 'step 4',
        description: `Paiement`,
    },
    {
        label: 'step 5',
        description: `Confirmation`,
    },
];


const Test = () => {
    const [currentStep, setCurrentStep] = React.useState(0);
    const [stepState, setStepState] = React.useState<{ [index: number]: boolean }>({
        0: true,
        1: false,
        2: false,
        3: false
    })
    const expand = (index: number) => {
        setStepState(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    }
    
    const OnChangeStep = (currentStep: number , updatedStep : number) => {
        setCurrentStep(updatedStep);
        setStepState(prevState => ({
            ...prevState,
            [currentStep]: !prevState[currentStep],
            [updatedStep]: !prevState[updatedStep]
    
        }));
    
    }
    
    const icons: { [index: number]: React.ReactElement } = {
        0: <HiOutlineIdentification />,
        1: <MdAirlineSeatReclineExtra />,
        2: <MdOutlineUpdate />,
        3: <MdPayment />,
        4: <MdOutlineDownloadDone />,
    };
    

    return (
        <div className="container test">
            <div className="row">
                <div className="col-2 bg-success position-relative image-left-banner">
                    <img src="./assets/images/img-left-banner.jpg" alt='' />
                    <div className='stepper-0 '>
                        <IconLabel icon={icons[0]} active={currentStep == 0} completed={currentStep > 0} />
                        <Connecteur active={currentStep == 0} completed={currentStep > 0} />
                    </div>
                </div>
                <div className="col-10 text  ">
                    test
                </div>
            </div>
        </div>
    )
}
export default Test