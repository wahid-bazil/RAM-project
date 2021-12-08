import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { BsCurrencyExchange } from 'react-icons/bs';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import StepContent from '@mui/material/StepContent';
import Box from '@mui/material/Box';
import { HiOutlineIdentification } from 'react-icons/hi';
import { MdAirlineSeatReclineExtra } from 'react-icons/md';
import { GrDocumentUpdate } from 'react-icons/gr';
import { MdPayment } from 'react-icons/md';
import { GrValidate } from 'react-icons/gr';







const ColorlibStepIconRoot = styled('div')<{
    ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    }),
}));

const ColorlibStepIconRoote : FC<Props> = (ownerState:{ completed?: boolean; active?: boolean }) => {
    return (
        <div>
                
        </div>
    )

}

function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;
    const icons: { [index: string]: React.ReactElement } = {
        1: <HiOutlineIdentification />,
        2: <MdAirlineSeatReclineExtra />,
        3: <GrDocumentUpdate />,
        4: <MdPayment />,
        5: <GrValidate />
    };

    /* <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
    */

    return (
        <div>
            <ColorlibStepIconRoote/>
           
        </div>

    );
}

const steps = [
    {
        label: 'Select campaign settings',
        description: ''
    },
    {
        label: 'Create an ad group',
        description:
            '',
    },
    {
        label: 'Create an ad',
        description: ``,
    },
    {
        label: 'Create an ad',
        description: ``,
    },
    {
        label: 'Create an ad',
        description: ``,
    },
];

export default function CustomizedSteppers() {

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div>
            <Stack sx={{ width: '100%' }} spacing={4}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel
                                optional={
                                    index === 2 ? (
                                        <Typography variant="caption">Last step</Typography>
                                    ) : null
                                }
                                StepIconComponent={ColorlibStepIcon}
                            >
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                <Typography>{step.description}</Typography>
                                <Box sx={{ mb: 2 }}>
                                    <div>
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </Stack>
            <div>
                {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography>All steps completed - you&apos;re finished</Typography>
                        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                            Reset
                        </Button>
                    </Paper>
                )}
            </div>
        </div>


    );
}