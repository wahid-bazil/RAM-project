import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { GrNext } from 'react-icons/gr';
import { FaPlaneDeparture } from 'react-icons/fa';
import { FaHashtag } from 'react-icons/fa';
import { MdFamilyRestroom } from 'react-icons/md';
import { BsCurrencyExchange } from 'react-icons/bs';
import { IconContext } from "react-icons";


function Home() {
    const [count, setCount] = useState(0);
    const image = ['./assets/images/home.png']



    return (
        <div className="container">
            <div className="test " style={{
                backgroundImage: `url(${image})`
            }}>
                <div className="p-5">
                    <div className="mt-5 col-6 pt-5">
                        <h1 className="home-title">
                            BUSINESS CLASS
                        </h1>
                        <div className="pr-5">
                            <h4 className="home-subtitle">
                                Voyagez en Business Class avec RPYAL Air Maroc et découvrez Nos nouveau standards de confort à bord
                            </h4>
                            <p className="home-text">
                                cabine plus spacieuse ,Programmes de divertissement individuels , siège encuirs , restauration savoureuse et variée ,
                                faites l'expérience d'un voyage aillant confort ,Plaisir et sérénité
                            </p>
                        </div>

                    </div>
                    <div>
                        <div className=" form-title col-2 pt-3 pb-3">
                            <div className="">
                                SURCLASSEMENT
                            </div>
                        </div>
                        <div className="home-form   pt-4 pb-3  ">
                            <div className="d-flex justify-content-between   ">
                                <div className="col-3 ">
                                    <div className="label d-flex ">
                                        <i><FaPlaneDeparture className=" " /></i>
                                        <span> Aéroport de départ</span>
                                    </div>
                                    <div className=" ">
                                        <TextField
                                            id="standard-multiline-flexible"
                                            value={'Casablanca'}
                                            variant="standard"
                                            margin="normal"
                                            fullWidth
                                        />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="label d-flex">
                                        <i><FaHashtag /></i>
                                        <span>Code de réservation</span>
                                    </div>

                                    <TextField
                                        id="standard-multiline-flexible"
                                        multiline
                                        maxRows={4}
                                        value={'Casablanca'}
                                        variant="standard"
                                        margin="normal"
                                        fullWidth
                                    />
                                </div>
                                <div className="col-3">
                                    <div className="label d-flex">
                                        <i>
                                            <MdFamilyRestroom />

                                        </i>
                                        <span>NOM</span>
                                    </div>
                                    <TextField
                                        id="standard-multiline-flexible"
                                        multiline
                                        maxRows={4}
                                        value={'Casablanca'}
                                        variant="standard"
                                        margin="normal"
                                        fullWidth
                                    />
                                </div>
                                <div className="col-3">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <div className="label d-flex">
                                                <i>
                                                    <BsCurrencyExchange />
                                                </i>
                                                <span>Devise</span>
                                            </div>

                                            <TextField
                                                id="standard-multiline-flexible"
                                                multiline
                                                maxRows={4}
                                                value={'Casablanca'}
                                                variant="standard"
                                                margin="normal"
                                                fullWidth
                                            />
                                        </div>
                                        <button className="btn btn-pa ">
                                            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                                               
                                                    <GrNext />
                                                
                                            </IconContext.Provider>

                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    );
}
export default Home