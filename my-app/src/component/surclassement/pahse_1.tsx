import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import { GiAirplaneDeparture } from 'react-icons/gi';
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
        <div className='  '>
            <div className="phase-1">
                <h6 className=' '>
                    Saisissez votre aéroport de départ, votre code
                    de réservation et votre nom
                </h6>
                <form>
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
                </form>
                <div className='description position-relative d-flex mt-4 '>
                    <img className='col-md-5 col-12 p-0 ' src='./assets/images/description.png' />
                    <div>
                        <div className='description-text col-md-7 col-12 p-0 '>
                            <h4 className='title'>
                                CLASSE BUISNISS
                            </h4>
                            <p>
                                Voyagez avec Buisniss Class avec Royal Air Maroc et découverez nos nouveaux standard de confort a bord : cabine plus spacieuse.<br /> <br />Programmes de divertissement individuels, sièges en cuirs, restauration savoureuse et versée faites l’expérience d’un voyage alliant confort,  plaisir et sérénité.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Phase1