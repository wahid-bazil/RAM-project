import Phase1 from "./pahse_1"
import Phase2 from "./pahse_2"
import Phase3 from "./phase_3"
import Phase4 from "./phase_4"
import { HiOutlineIdentification } from 'react-icons/hi';
import { MdAirlineSeatReclineExtra } from 'react-icons/md';
import { MdOutlineUpdate } from 'react-icons/md';
import { MdPayment } from 'react-icons/md';
import { MdOutlineDownloadDone } from 'react-icons/md';
import Connecteur from "../stepper/connecter"
import IconLabel from "../stepper/icon_label"
import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Accordions from "../accordion/index"
import Header from "../header";

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
        boxShadow: "none",
        borderBlockColor: 'red',
        "& .MuiButtonBase-root": {
            backgroundColor: '#F5F5F5F5',
        }
    }
})


const Surclassement = () => {
    const classes = useStyles();
    const [currentStep, setCurrentStep] = React.useState(1);
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

    const OnChangeStep = (currentStep: number, updatedStep: number) => {
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

    const phases: { [index: number]: React.ReactElement } = {
        0: <Phase1 onChangeStep={OnChangeStep} />,
        1: <Phase2 onChangeStep={OnChangeStep} />,
        2: <Phase3 onChangeStep={OnChangeStep} />,
        3: <Phase4 />,
    };




    return (
        <div>
            <div className="pl-md-5 pr-md-5 mt-3 mb-md-5">
                <Header />
            </div>
            <div className="container surclassement ">

                <div className="offset-md-1">
                    <div className="title ">
                        <h3>
                            SURCLASSEMENT
                        </h3>
                    </div>
                    <div className="phases">
                        <div className="small-device ">
                            <div className="stepper-mobile ">
                                <div className="d-flex justify-content-between">
                                    {steps.map((step, index) => (
                                        <div>
                                            <IconLabel icon={icons[index]} active={currentStep == index} completed={currentStep > index} />
                                        </div>
                                    ))}
                                </div>
                                <h6 className="">{steps[currentStep].description}</h6>
                            </div>
                            <div className="mt-4">
                                {
                                    phases[currentStep]
                                }
                            </div>
                        </div>
                        <div className="large-device">
                            {steps.map((step, index) => (
                                <div key={index} >
                                    <div className='stepper-0'>
                                        <IconLabel icon={icons[index]} active={currentStep == index} completed={currentStep > index} />
                                        <Connecteur active={currentStep == index} completed={currentStep > index} />
                                    </div>
                                    <Accordions expand={expand} index={index} phaseLabel={steps[currentStep].description} active={currentStep == index} completed={currentStep > index} />
                                    <div className={stepState[index] ? 'phase-container expanded' : 'phase-container '}>
                                        {currentStep >= index ? phases[index] : null}
                                    </div>
                                    {/*<Accordion elevation={0} style={{}} className={classes.root} id={String(index)} expanded={stepState[index]} onChange={(e) => onchange(e.currentTarget.id)}>
                                   <div className="phase-label">
                                       <AccordionSummary
                                           style={{ border: "none", borderTop:'none' }}
                                           expandIcon={currentStep >= index ? <MdExpandMore /> : null}
                                           aria-controls="panel1bh-content"
                                           id={String(index)}
                                       >
                                           <h6 className={currentStep >= index ? 'phase-title active' : 'phase-title  '}>{step.description}</h6><span className="hl" />
                                       </AccordionSummary>
                                   </div>
                                   <div className="p-5 pl-5 ">
                                       {currentStep >= index ? phases[index] : null}
                                   </div>
                               </Accordion>
                       */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Surclassement