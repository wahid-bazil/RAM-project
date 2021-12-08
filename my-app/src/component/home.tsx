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
        <div className="container">
                <div className="home ">
            <div style={{
                backgroundImage: `url(${image})`
            }}>
                <div className="p-5 pt-4">
                    {<Header />}
                    <div className="col-6 mt-5  pt-5">
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
                    <div className="form mt-5">
                        <div className=" form-title col-2   ">
                            <div className="">
                                SURCLASSEMENT
                            </div>
                        </div>
                        <div className="form-container">
                            <div className="d-flex justify-content-between   ">
                                <div className="col-3 ">
                                    <div className="label d-flex ">
                                        <IconContext.Provider
                                            value={{ color: '#CF013E' }}
                                        >
                                            <i>
                                                <FaHashtag />
                                            </i>
                                        </IconContext.Provider>
                                        <span> Aéroport de départ</span>
                                    </div>
                                    <div className=" ">
                                        <TextField
                                            id="standard-multiline-flexible"
                                            value={'Casablanca Mohamed v (CMN)'}
                                            variant="standard"
                                            margin="normal"
                                            fullWidth
                                        />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="label d-flex">

                                        <IconContext.Provider
                                            value={{ color: '#CF013E' }}
                                        >
                                            <i>
                                                <FaHashtag />
                                            </i>
                                        </IconContext.Provider>
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
                                <div className="col-3 ">
                                    <div className="label d-flex">
                                        <IconContext.Provider
                                            value={{ color: '#CF013E' }}
                                        >
                                            <i>

                                                <MdFamilyRestroom />

                                            </i>
                                        </IconContext.Provider>
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
                                <div className="col-3 border-0">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <div className="label d-flex">
                                                <IconContext.Provider
                                                    value={{ color: '#CF013E' }}
                                                >
                                                    <i>
                                                        <BsCurrencyExchange />
                                                    </i>
                                                </IconContext.Provider>
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
                                        <IconContext.Provider
                                                    value={{ color: 'white' , size:"40px" }}
                                                >
                                                        <MdNavigateNext />
                                                </IconContext.Provider>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        <div>
            <SliderIdex/>
        </div>
            
        </div>
    
    );
}
export default Home