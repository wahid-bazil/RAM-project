import * as React from 'react';
import { HiOutlineIdentification } from 'react-icons/hi';
import { MdAirlineSeatReclineExtra } from 'react-icons/md';
import { MdOutlineUpdate } from 'react-icons/md';
import { MdPayment } from 'react-icons/md';
import { MdOutlineDownloadDone } from 'react-icons/md';

import Phase1 from '../surclassement/pahse_1';
import Phase2 from '../surclassement/pahse_2';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { MdExpandMore } from 'react-icons/md';




/*
const IndexStepper: React.FC<{ steps: { label: string, description: string }[], activeStep: number }> = (props) => {
    const [refs, setRefs] = useState<React.RefObject<HTMLDivElement>[]>([]);
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
        let refsArr: React.RefObject<HTMLDivElement>[] = [];
        for (let index = 0; index < steps.length; index++) {
            let ref = createRef<HTMLDivElement>();
            refsArr.push(ref);
        }

        setRefs(refsArr);
    }, [])


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
*/
const steps = [
    {
        label: 'Identification',
        description: ''
    },
    {
        label: 'step 2',
        description:
            '',
    },
    {
        label: 'step 3',
        description: ``,
    },
    {
        label: 'step 4',
        description: ``,
    },
    {
        label: 'step 5',
        description: ``,
    },
];
const IndexStepper = () => {
    const [activeStep, setactiveStep] = React.useState(2);
    const [active, setactive] = React.useState(true);
    const [active2, setactive2] = React.useState(false);
    const [active3, setactive3] = React.useState(false);

    const icons: { [index: string]: React.ReactElement } = {
        0: <HiOutlineIdentification />,
        1: <MdAirlineSeatReclineExtra />,
        2: <MdOutlineUpdate />,
        3: <MdPayment />,
        4: <MdOutlineDownloadDone />,
    };

    function stepLabelIconClasse(index: number): string {
        if (index == activeStep) {
            return 'step-label-icon active ';
        }
        else if (index < activeStep) {
            return 'step-label-icon completed';
        }
        else {
            return 'step-label-icon';
        }
    }
    function connecterClasse(index: number): string {
        if (index == activeStep) {
            return 'stepper-connecter active  ';
        }
        else if (index < activeStep) {
            return 'stepper-connecter completed';
        }
        else {
            return 'stepper-connecter ';
        }
    }
    return (
        <div className="container">
            {/*<div>
                <div className=" d-flex flex-column justify-content-between  ">
                    {steps.map((step, index) => (
                        <div>
                            <div className={stepLabelIconClasse(index)}>
                                <i>{icons[index]}</i>
                            </div>
                           
                        </div>
                    ))}
                </div>
                <h6 className='mt-3'>
                    {steps[activeStep].label}
                </h6>
            </div>   
            <div>
            </div>
            */}
            <div>
                <button onClick={() => setactive(!active)}>Click me</button>
                <div className='mt-3 util-0   '>
                    <div>
                        <div className='stepper-0'>
                            <div className=' step-label-icon '>
                                <i>
                                    <HiOutlineIdentification />
                                </i>
                            </div>
                            <div className={connecterClasse(0)} />
                        </div>
                        <div className='pl-5 pr-5 '>
                            <Accordion expanded={active} onChange={() => setactive(!active)} >
                                <div className='tr'>
                                    <AccordionSummary
                                        expandIcon={<MdExpandMore />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        identification
                                    </AccordionSummary>
                                </div>

                                <div>
                                    {true ?
                                        < Phase1 /> :
                                        null}
                                </div>

                            </Accordion>

                        </div>

                    </div>


                </div>
                <div className='mt-3 util-0   '>
                    <div>
                        <div className='stepper-0'>
                            <div className=' step-label-icon '>
                                <i>
                                    <HiOutlineIdentification />
                                </i>
                            </div>
                            <div className={connecterClasse(0)} />
                        </div>
                        <div className='pl-5 pr-5 '>
                            <Accordion expanded={active3} onChange={() => setactive3(!active3)} >
                                <div className='tr'>
                                    <AccordionSummary
                                        expandIcon={<MdExpandMore />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"

                                    >
                                        identification
                                    </AccordionSummary>
                                </div>

                                <div>
                                    {true ?
                                        < Phase1 /> :
                                        null}
                                </div>

                            </Accordion>

                        </div>

                    </div>


                </div>
                <div className='mt-3 util-0   '>
                    <div>
                        <div className='stepper-0'>
                            <div className=' step-label-icon '>
                                <i>
                                    <HiOutlineIdentification />
                                </i>
                            </div>
                            <div className={connecterClasse(0)} />
                        </div>
                        <div className='pl-5 pr-5 '>
                            <Accordion expanded={active2} onChange={() => setactive2(!active2)} >
                                <div className='tr'>
                                    <AccordionSummary
                                        expandIcon={<MdExpandMore />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"

                                    >
                                        identification
                                    </AccordionSummary>
                                </div>

                                <div>
                                    {true ?
                                        < Phase1 /> :
                                        null}
                                </div>

                            </Accordion>

                        </div>

                    </div>


                </div>
             
            </div>
        </div>

    )

}

export default IndexStepper