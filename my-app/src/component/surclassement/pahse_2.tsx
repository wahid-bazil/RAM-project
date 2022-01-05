
import { MdAirlineSeatReclineExtra } from 'react-icons/md';
import Radio from '@mui/material/Radio';
import { MdDone } from "react-icons/md";
import { IoAirplaneOutline } from 'react-icons/io5';
import { GiAirplaneDeparture, GiAirplaneArrival } from 'react-icons/gi';
const members = ['Omar Abdellaoui', 'Amina Abdellaoui', 'Ahmed Abdellaoui', 'Mehdi Abdellaoui']
const vols = [1, 2]
const Phase2: React.FC<{ onChangeStep: (currentStep: number, updatedStep: number) => void }> = (props) => {


    return (
        <div className="p-2">
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
                        <div className='passagers position-relative d-flex flex-column mt-4 '>
                            <img className='' src='.\assets\images\seat.svg' alt='' />
                            {members.map((member, index) => (
                                <div className='d-flex col-12 col-lg-9 justify-content-start align-items-center'>
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
                                <div className='d-flex justify-content-start align-items-center'>
                                    <div className='col-1 p-0 '>
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
                                    </div>
                                    <div className='vol-details col-11 col-lg-11'>
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
            <div className='row justify-content-between mt-3'>
                <button onClick={() => props.onChangeStep(1, 0)} className='btn-back'>
                    Précédente
                </button>
                <button onClick={() => props.onChangeStep(1, 2)} className='btn-next'>
                    Surclassement
                </button>
            </div>
        </div>
    )


}

export default Phase2