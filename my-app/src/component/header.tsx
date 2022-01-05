import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineMail } from 'react-icons/md';
import { AiOutlineEuroCircle } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { IconButton } from '@mui/material';

const useStyles = makeStyles({
    root: {
        backgroundColor: "dark",
        width: '90px',
        height: '30px',
        fontSize: "5px",
        padding: '0px',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
            fontSize: "5px",
            backgroundColor: "dark",
            padding: '0px',
        }


    },

});

function Header() {
    const image = ['./assets/images/logo.png', './assets/images/oneworld-logo.png']
    const classes = useStyles();
    return (
        <header className="">
            <div className="d-flex justify-content-between align-items-center position-relative  p-0  ">
                <div className="logo ">
                    <div className="ram">
                        <img src={image[0]} />
                    </div>
                    <div className="one-world  ">
                        <img src={image[1]} />
                    </div>
                </div>
                <div className="menu-large-device ">
                    <div className="d-flex  align-items-center">
                        <li className="menu-title ">
                            <h6 >Surclassement Dernière minute</h6>
                            <div className="hl" />
                        </li>
                        <li className="d-flex align-items-center">
                            <Select
                                variant="outlined"
                                size="small"
                                className={classes.root}
                                inputProps={{ style: { fontSize: 5 } }}
                            >
                                <MenuItem className="menu-item " value={10} >
                                    <i className="image-france"><img alt="" src="./assets/images/france.png" /></i><span className="selectt  ml-2">FR  </span>
                                </MenuItem>
                            </Select>
                        </li>
                        <li className="d-flex align-items-center">
                            <Select
                                variant="outlined"
                                size="small"
                                className={classes.root}
                            >
                                <MenuItem className="menu-item " value={10} >
                                    <i><AiOutlineEuroCircle /></i><span className="selectt ml-2">FR  </span>
                                </MenuItem>
                            </Select>
                        </li>
                        <li className="phone-icon d-flex align-items-center">
                            <i ><FiPhoneCall /></i>
                        </li>
                        <li className="email-icon d-flex align-items-center">
                            <i ><MdOutlineMail /></i>
                        </li>
                    </div>
                </div>
                <div className="menu small-device">
                    <div className="d-flex align-items-center">
                        <IconButton aria-label="delete">
                            <i><AiOutlineMenu /></i>
                        </IconButton>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header