import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { MdNavigateNext } from 'react-icons/md';
import { FaPlaneDeparture } from 'react-icons/fa';
import { FaHashtag } from 'react-icons/fa';
import { MdFamilyRestroom } from 'react-icons/md';
import { BsCurrencyExchange } from 'react-icons/bs';
import { IconContext } from "react-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderIdex from "./slider";

function Home() {
    const [count, setCount] = useState(0);
    const image = ['./assets/images/home.png']


    return (
        <div className="home bg-white">
            <div className="top-side pb-0 pt-2">
                <div className='pr-md-5 pl-md-5'>
                    <Header />
                </div>
                <div className="p-5 mt-5 mb-4">
                    <div className="col-md-10 ">
                        <h1 className="title">
                            BUSINESS CLASS
                        </h1>
                        <p className="col-7">
                            <span>
                                Voyagez en Business Class aves Royal Air Maroc et découvrez Nos nouveaux standards de confort à bord
                            </span>
                            <br />
                            cabine plus spacieuse, Programmes de divertissement
                            individuels, sièges en cuirs, restauration Savoureuse et variée,
                            faites l’expérience d’un voyage alliant confort, Plaisir et sérénité.
                        </p>
                    </div>
                    <div className="form mt-5 pt-4">
                        <h6>
                            SURCLASSEMENT
                        </h6>
                        <div className="form-container">
                            <div className="col-3 border-field">
                                <div className="label ">
                                    <i>
                                        <FaPlaneDeparture />
                                    </i>
                                    <span> Aéroport de départ</span>
                                </div>
                                <div>
                                    <TextField
                                        id="standard-multiline-flexible"
                                        value={'Casablanca Mohamed v (CMN)'}
                                        variant="standard"
                                        margin="normal"
                                        fullWidth
                                    />
                                </div>
                            </div>
                            <div className="col-3 border-field">
                                <div className="label">
                                    <i>
                                        <FaHashtag />
                                    </i>
                                    <span>Code de réservation</span>
                                </div>
                                <TextField
                                    id="standard-multiline-flexible"
                                    multiline
                                    maxRows={4}
                                    value={'Code (6 caratère)..'}
                                    variant="standard"
                                    margin="normal"
                                    fullWidth
                                />
                            </div>
                            <div className="col-3 border-field">
                                <div className="label">
                                    <i>
                                        <MdFamilyRestroom />
                                    </i>
                                    <span>NOM</span>
                                </div>
                                <TextField
                                    id="standard-multiline-flexible"
                                    multiline
                                    maxRows={4}
                                    value={'Nom de famille '}
                                    variant="standard"
                                    margin="normal"
                                    fullWidth
                                />
                            </div>
                            <div className="col-3 field">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <div className="label">
                                            <i>
                                                <BsCurrencyExchange />
                                            </i>
                                            <span>Devise</span>
                                        </div>
                                        <TextField
                                            id="standard-multiline-flexible"
                                            multiline
                                            maxRows={4}
                                            value={'MAD'}
                                            variant="standard"
                                            margin="normal"
                                            fullWidth
                                        />
                                    </div>
                                    <button className="btn btn-ram-primary ">
                                        <MdNavigateNext />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div>
                <SliderIdex />
            </div>
        </div>
    );
}
export default Home