
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
import { GiAirplaneDeparture ,GiAirplaneArrival} from 'react-icons/gi';

const members = ['Omar Abdellaoui', 'Amina Abdellaoui', 'Ahmed Abdellaoui', 'Mehdi Abdellaoui']


const Phase2 = () => {



    return (
        <div className="container surclassement ">
            <div className="pahse-2 d-flex flex-column p-2">
                <div className='section '>
                    <div className='phase-title d-flex '>
                        <i><MdAirlineSeatReclineExtra /></i>
                        <div className='vl' />
                        <span>
                            Veuillez sélectionner les passagers
                        </span>
                    </div>
                    <div className='d-flex'>
                        <div className='col-8  d-flex flex-column justify-content-center align-items-start mt-4 '>
                            {members.map((member, index) => (
                                <div className='passagers col-12 mb-3 d-flex justify-content-start align-items-center'>
                                    <Radio sx={{
                                        color: '#C20831',
                                        '&.Mui-checked': {
                                            color: '#C20831',
                                        },
                                    }} checkedIcon={<i><MdDone /></i>} />
                                    <span className=''> {members[index]} </span>
                                </div>
                            ))}
                        </div>
                        <div className='col-4 d-flex justify-content-end  align-items-end opacity-2'>
                            <img src='.\assets\images\seat.svg' alt='' />
                        </div>

                    </div>
                </div>
                <div className='section mt-4'>
                    <div className='phase-title d-flex '>
                        <i><IoAirplaneOutline /></i>
                        <div className='vl' />
                        <span>
                            Veuillez sélectionner un vol
                        </span>
                    </div>
                    <div className='vols mt-3 '>
                        <div className='d-flex mb-3'>
                            <div className='col-2 d-flex align-items-center '>
                                <Radio sx={{
                                    color: '#C20831',
                                    '&.Mui-checked': {
                                        color: '#C20831',
                                    },
                                }}  />

                            </div>
                            <div className='d-flex flex-column  col-10   '>
                                <div className='d-flex align-items-center vol-details mb-2'>
                                    <i>
                                        <GiAirplaneDeparture />
                                    </i>
                                    <span className='vl ' />
                                    <span>
                                    Agadir (AGA)
                                    </span>
                                </div>
                                <div className='d-flex align-items-center vol-details'>
                                    <i>
                                        <GiAirplaneArrival />
                                    </i>
                                    <span className='vl' />
                                    <span>
                                    Agadir (AGA)
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mb-2'>
                            <div className='col-2 d-flex align-items-center '>
                                <Radio sx={{
                                    color: '#C20831',
                                    '&.Mui-checked': {
                                        color: '#C20831',
                                    },
                                }} />

                            </div>
                            <div className='d-flex flex-column  col-10   '>
                                <div className='d-flex align-items-center vol-details mb-2'>
                                    <i>
                                        <GiAirplaneDeparture />
                                    </i>
                                    <span className='vl ' />
                                    <span>
                                    Agadir (AGA)
                                    </span>
                                </div>
                                <div className='d-flex align-items-center vol-details'>
                                    <i>
                                        <GiAirplaneArrival />
                                    </i>
                                    <span className='vl' />
                                    <span>
                                    Agadir (AGA)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Phase2