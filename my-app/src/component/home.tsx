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
            <div className="top-side">
                <Header />
                <div className="top-side-container">
                    <div className="description mt-lg-5 pt-5 ">
                        <h1 className="title">
                            BUSINESS CLASS
                        </h1>
                        <p className="">
                            <span>
                                Voyagez en Business Class aves Royal Air Maroc et découvrez Nos nouveaux standards de confort à bord
                            </span>
                            <br />
                            cabine plus spacieuse, Programmes de divertissement
                            individuels, sièges en cuirs, restauration Savoureuse et variée,
                            faites l’expérience d’un voyage alliant confort, Plaisir et sérénité.
                        </p>
                    </div>
                    <form>
                        <h6>
                            SURCLASSEMENT
                        </h6>
                        <div className="form-container">
                            <div className="col-lg-3 border-field">
                                <div className="label">
                                    <i>
                                        <FaHashtag />
                                    </i>
                                    <span>Aéroport de départ</span>
                                </div>
                                <TextField
                                    id="standard-multiline-flexible"
                                    multiline
                                    maxRows={4}
                                    value={'Casablanca Mohamed V (CMN)'}
                                    variant="standard"
                                    margin="normal"
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-3 border-field">
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
                            <div className="col-lg-3 border-field">
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
                            <div className="col-lg-3 field">
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
                            <button className="btn btn-ram-primary large-device">
                                <MdNavigateNext />
                            </button>
                            <button className="btn btn-ram-primary small-device ">
                                Suivant
                            </button>
                        </div>
                    </form>
                </div>
            </div>
           {/* <SliderIdex />*/}
        </div>
    );
}
export default Home