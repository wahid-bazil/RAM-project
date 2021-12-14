import { MdPayment } from 'react-icons/md';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { makeStyles } from '@mui/styles';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { MdDateRange } from 'react-icons/md';
import { FaFileInvoice } from 'react-icons/fa';

const useStyles = makeStyles({
    root: {
        width: '100%',
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#C20831",
            borderRadius: "8px"
        },

        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#C20831"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "black"
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "black"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: '2px solid #E35D6E'
        }
    }
});

const Phase4 = () => {
    const classes = useStyles();
    return (
        <div className=" ">
            <div className='phase-4 mt-5'>
                <div className='phase-title d-flex '>
                    <i><MdPayment /></i>
                    <div className='vl' />
                    <span>
                        Mode de paiement
                    </span>
                </div>
                <div className='payment-logo col-8 d-flex justify-content-between mt-3'>
                    <div className='visa'>
                        <img src='./assets/images/g4158.png' alt='' />
                    </div>
                    <div>
                        <img src='./assets/images/mastercard-logo.png' alt='' />
                    </div>
                    <div>
                        <img src='./assets/images/paypal-logo-preview.png' alt='' />
                    </div>
                </div>
                <div className='mt-4'>
                    <div className='col-12 mb-4'>
                        <TextField
                            className={classes.root}
                            variant="outlined"
                            label="Numéro de carte"

                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <i><MdPayment /></i>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className='col-12 mb-4'>
                        <TextField
                            className={classes.root}
                            variant="outlined"
                            label="Numéro de carte"

                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <i><HiOutlineUserCircle /></i>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className='d-flex justify-content-between mb-4'>
                        <div className='col-5'>
                            <TextField
                                className={classes.root}
                                variant="outlined"
                                label="Date d'expiration"

                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <i><MdDateRange /></i>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div className='col-5'>
                            <TextField
                                className={classes.root}
                                variant="outlined"
                                label="CVV"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='phase-title d-flex '>
                        <i><FaFileInvoice /></i>
                        <div className='vl' />
                        <span>
                            Facture Total
                        </span>
                    </div>
                    <div className='mt-3'>
                        <div className='d-flex justify-content-between p-2'>
                            <div>
                                Total Vol
                            </div>
                            <div>
                                3 x 6 100.00 MAD
                            </div>

                        </div>
                        <div className='d-flex total '>
                            <div className='col-4 label'>
                                total
                            </div>

                            <div>
                                18,300.00<span> MAD</span>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )

}
export default Phase4