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
        <div className="surclassement ">
            <div className=" header-test-0">
                <Header />
            </div>
            <div className="surclassement-container">
                <div className="title">
                    <h3>
                        SURCLASSEMENT
                    </h3>
                </div>
                <div className="phases">
                    <div className="small-device">
                        <div className="stepper-mobile">
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
                    <div className="large-device mt-3">
                        <div className="test-image-0">
                            <img src="./assets/images/image-left.jpg" alt='' />
                        </div>
                        {steps.map((step, index) => (
                            <div key={index} >
                                <div className='stepper-0'>
                                    <IconLabel icon={icons[index]} active={currentStep == index} completed={currentStep > index} />
                                    <Connecteur active={currentStep == index} completed={currentStep > index} />
                                </div>
                                <Accordions expand={expand} index={index} phaseLabel={steps[index].description} active={currentStep == index} completed={currentStep > index} />
                                <div className={stepState[index] ? 'phase-container expanded' : 'phase-container'}>
                                    {currentStep >= index ? phases[index] : null}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Surclassement