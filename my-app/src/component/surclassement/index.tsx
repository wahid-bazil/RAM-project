import IndexStepper from "../stepper"
import Phase1 from "./pahse_1"
import Phase2 from "./pahse_2"
import Phase3 from "./phase_3"
import Phase4 from "./phase_4"
import { HiOutlineIdentification } from 'react-icons/hi';
import { MdAirlineSeatReclineExtra } from 'react-icons/md';
import { MdOutlineUpdate } from 'react-icons/md';
import { MdPayment } from 'react-icons/md';
import { MdOutlineDownloadDone } from 'react-icons/md';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { MdExpandMore } from 'react-icons/md';
import Connecteur from "../stepper/connecter"
import IconLabel from "../stepper/icon_label"
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

const useStyles = makeStyles({
    root: {
        width: '100%',
        backgroundColor: 'white',
    }
});
const Surclassement = () => {
    const classes = useStyles();
    const [currentStep, setCurrentStep] = React.useState(2);
  
    const [stepState, setStepState] = React.useState<{ [index: number]: boolean }>({
        0: true,
        1: false,
        2: false,
        3: false
    })

    const icons: { [index: number]: React.ReactElement } = {
        0: <HiOutlineIdentification />,
        1: <MdAirlineSeatReclineExtra />,
        2: <MdOutlineUpdate />,
        3: <MdPayment />,
        4: <MdOutlineDownloadDone />,
    };

    const phases: { [index: number]: React.ReactElement } = {
        0: <Phase1 />,
        1: <Phase2 />,
        2: <Phase3 />,
        3: <Phase4 />,

    };

    const onchange = (index: string) => {
        setStepState(prevState => ({
            ...prevState,
            [index]: !prevState[parseInt(index)]
        }));
    }
    return (
        <div>
            <div className=" container  surclassement  position-relative  ">
                <div className="phases offset-1 ">
                    <div className="title pl-5 pr-5">
                        <h3>
                            SURCLASSEMENT
                        </h3>
                    </div>
                    {steps.map((step, index) => (
                        <div key={index} className=''>
                            <div className='stepper-0 '>
                                <IconLabel icon={icons[index]} active={currentStep == index} completed={currentStep > index} />
                                <Connecteur active={currentStep == index} completed={currentStep > index} />
                            </div>
                            <div className='pl-5 pr-5 '>
                                <Accordion className={classes.root} id={String(index)} expanded={stepState[index]} onChange={(e) => onchange(e.currentTarget.id)}>

                                    <AccordionSummary
                                        expandIcon={currentStep >= index ? <MdExpandMore /> : null}
                                        aria-controls="panel1bh-content"
                                        id={String(index)}
                                    >
                                        <h6 className={currentStep >= index ? 'active' : ''}>{step.description}</h6>
                                    </AccordionSummary>

                                    <div className="p-3 bg-white">
                                        {currentStep >= index ? phases[index] : null}
                                    </div>
                                </Accordion>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Surclassement