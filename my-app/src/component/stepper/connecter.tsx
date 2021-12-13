import * as React from 'react';

const Connecteur: React.FC<{ active: boolean, completed: boolean }> = (props) => {

    if (props.active) {
        return (
            <div className='stepper-connecter active' />
        )
    }
    else if (props.completed) {
        return (
            <div className='stepper-connecter completed' />
        )
    }
    else {
        return (
            <div className='stepper-connecter' />
        )
    }


}
export default Connecteur