import TextField from '@mui/material/TextField';
import { BiHide } from 'react-icons/bi'


const FormAuth = () => {

    return (
        <form>
            <div className='form-field'>
                <label htmlFor="email">Email / Nom</label>
                <input id="email" placeholder='Ahmed' />
            </div>

            <div className='form-field'>
                <i><BiHide/></i>
                <input placeholder='mot de passe' />

            </div>

            <div className='msg'>
                <div>
                    Changer mot de passe
                </div>
                <div>
                    Mot de passe oublié ?
                </div>
            </div>
            <button className='submit'>SE CONNECTER</button>
        </form>

    )


}
export default FormAuth; 