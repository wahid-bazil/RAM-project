import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import { GiAirplaneDeparture } from 'react-icons/gi';
import { IconContext } from "react-icons";
import { StyledEngineProvider } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import { NativeSelect } from '@mui/material';
import { Select } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import { CgHashtag } from "react-icons/cg";
import { MdFamilyRestroom } from "react-icons/md";

const image = ['./assets/images/description.png']

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



const Phase1 = () => {
    const [age, setAge] = React.useState("");
    const classes = useStyles();
    return (
        <div className='container surclassement phase-1'>
            <div className="phase-1">
                <div className="d-flex flex-column p-3 mt-5">
                    <div className='phase-title description text-start mb-4 '>
                        Saisissez votre aéroport de départ, votre code
                        de réservation et votre nom
                    </div>
                    <div className='mb-3 col-12'>
                        <TextField

                            className={classes.root}
                            value={age}
                            onChange={e => setAge(e.target.value)}
                            variant="outlined"
                            label="Air report"
                            select
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <i><GiAirplaneDeparture /></i>

                                    </InputAdornment>
                                ),
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </TextField>
                    </div>
                    <div className='mb-3 col-12'>
                        <TextField

                            className={classes.root}
                            value={age}
                            onChange={e => setAge(e.target.value)}
                            variant="outlined"
                            label="code de reservation"

                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <i><CgHashtag /></i>

                                    </InputAdornment>
                                ),
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </TextField>

                    </div>
                    <div className='col-12'>
                        <TextField
                            className={classes.root}
                            value={age}
                            onChange={e => setAge(e.target.value)}
                            variant="outlined"
                            label="nom de famille"

                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <i><MdFamilyRestroom /></i>

                                    </InputAdornment>
                                ),
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </TextField>

                    </div>

                </div>
                <div className='description-container p-3 mt-4 '>
                    <div className='description d-flex flex-column '>
                        <div className='title text-start   '>
                            CLASSE BUISNISS
                        </div>
                        <div className=' text-start '>
                            Voyagez avec Buisniss Class avec Royal Air Maroc et découverez nos nouveaux standard de confort a bord : cabine plus spacieuse.<br /> <br />Programmes de divertissement individuels, sièges en cuirs, restauration savoureuse et versée faites l’expérience d’un voyage alliant confort,  plaisir et sérénité.
                        </div>

                    </div>

                </div>
            </div>


        </div>

    );

}

export default Phase1