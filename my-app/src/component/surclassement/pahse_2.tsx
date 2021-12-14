
import { MdAirlineSeatReclineExtra } from 'react-icons/md';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { MdDone } from "react-icons/md";
import { makeStyles } from '@mui/styles';
import { IoAirplaneOutline } from 'react-icons/io5';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { GiAirplaneDeparture, GiAirplaneArrival } from 'react-icons/gi';

const members = ['Omar Abdellaoui', 'Amina Abdellaoui', 'Ahmed Abdellaoui', 'Mehdi Abdellaoui']
const vols = [1, 2]

const Phase2 = () => {


    return (
        <div className="  ">
            <div className="pahse-2 row justify-content-between  ">
                <div className='section col-12 col-md-6  '>
                    <div>
                        <div className='phase-title d-flex '>
                            <i><MdAirlineSeatReclineExtra /></i>
                            <div className='vl' />
                            <span>
                                Veuillez sélectionner les passagers
                            </span>
                        </div>
                        <div className='passagers position-relative d-flex flex-column  mt-4 '>
                            <img className='' src='.\assets\images\seat.svg' alt='' />
                            {members.map((member, index) => (
                                <div className='d-flex col-9 justify-content-start align-items-center'>
                                    <Radio sx={{
                                        color: '#C20831',
                                        '&.Mui-checked': {
                                            color: '#C20831',
                                        },
                                        "& .MuiSvgIcon-root": {
                                            height: 18,
                                            width: 18,
                                        }
                                    }} checkedIcon={<i><MdDone /></i>} />
                                    <span className=''> {members[index]} </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='section col-12 col-md-6 '>
                    <div>
                        <div className='phase-title d-flex '>
                            <i><IoAirplaneOutline /></i>
                            <div className='vl' />
                            <span>
                                Veuillez sélectionner un vol
                            </span>
                        </div>
                        <div className='vols position-relative d-flex flex-column  mt-3 '>
                            <img className='' src='.\assets\images\air-plan.png' alt='' />
                            {vols.map((member, index) => (
                                <div className='d-flex justify-content-start align-items-center '>
                                    <Radio sx={{
                                        color: '#C20831',
                                        '&.Mui-checked': {
                                            color: '#C20831',
                                        },
                                        "& .MuiSvgIcon-root": {
                                            height: 20,
                                            width: 20,
                                        }
                                    }} />
                                    <div className='vol-details col-9'>
                                        <div className='d-flex  align-items-center vol-details mb-2 '>
                                            <i>
                                                <GiAirplaneDeparture />
                                            </i>
                                            <span className='vl ' />
                                            <span>
                                                Agadir (AGA)
                                            </span>
                                        </div>
                                        <div className='d-flex align-items-center vol-details '>
                                            <i>
                                                <GiAirplaneArrival />
                                            </i>
                                            <span className='vl' />
                                            <span>
                                                Casablanca (CMN)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Phase2