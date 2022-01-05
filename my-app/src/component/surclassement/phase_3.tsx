import { GiAirplaneDeparture, GiAirplaneArrival } from 'react-icons/gi';
import { TiStopwatch } from 'react-icons/ti';
import { MdAirlineSeatReclineExtra } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';
import { IoPricetagsOutline } from 'react-icons/io5';

const members = ['Omar Abdellaoui', 'Amina Abdellaoui', 'Ahmed Abdellaoui']

const Phase3:React.FC <{onChangeStep:(currentStep: number , updatedStep : number)=>void}> = (props) => {
    
    return (
        <div>
            <div className='phase-3'>
                <div className='section'>
                    <div className="coordinates d-flex">
                        <div className="col-3  left d-flex flex-column align-items-center">
                            <div>
                                <i>
                                    <GiAirplaneDeparture/>
                                </i>
                            </div>
                            <div className='hour'>
                                08:20
                            </div>
                            <div className='place'>
                                Casablanca ( CAS )
                            </div>
                            <div className='date'>
                                22 septembre 2O21
                            </div>
                        </div>
                        <div className='col-6  center  d-flex justify-content-between align-items-center'>
                            <div className='line' />
                            <div>
                                <i><TiStopwatch /></i>
                                <div>
                                    4h 15min
                                </div>
                                <div>
                                    Direct
                                </div>
                            </div>
                            <div className='line' />
                        </div>
                        <div className='col-3  right d-flex flex-column align-items-center'>
                            <div>
                                <i>
                                    <GiAirplaneArrival />
                                </i>
                            </div>
                            <div className='hour'>
                                12:30
                            </div>
                            <div className='place'>
                                Paris ( PAR )
                            </div>
                            <div className='date '>
                                22 septembre 2O21
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-between mt-3 mb-4'>
                    <div className='section  col-12 col-md-6'>
                        <div>
                            <div className='phase-title d-flex '>
                                <i><MdAirlineSeatReclineExtra /></i>
                                <div className='vl' />
                                <span>
                                    Veuillez sélectionner les passagers
                                </span>
                            </div>
                            <div className='passagers mt-3 '>
                                {members.map((member, index) => (
                                    <div className='d-flex align-items-center'>
                                        <i>
                                            <BiUserCircle />
                                        </i>
                                        <span>
                                            {members[index]}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='section  col-12 col-md-6 '>
                        <div>
                            <div className='phase-title d-flex  '>
                                <i><IoPricetagsOutline /></i>
                                <div className='vl' />
                                <span>
                                    Prix
                                </span>
                            </div>
                            <div className='d-flex total mt-3'>
                                <div className='col-4 label'>
                                    total
                                </div>
                                <div>
                                    6,100.00 <span>MAD</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between mt-3'>
                    <button onClick={()=>props.onChangeStep(2,1)} className='btn-back'>
                        Précédente
                    </button>
                    <button className='btn-next'>
                        Surclassement
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Phase3