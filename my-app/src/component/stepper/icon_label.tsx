import React from "react"
import {AiFillCaretDown} from "react-icons/ai";
const IconLabel :React.FC  <{icon:React.ReactElement ,active:boolean ,completed :boolean}> = (props) => {

    function stepLabelIconClasse(active:boolean ,completed :boolean): string {
        if (active) {
            return 'step-label-icon active ';
        }
        else if (completed) {
            return 'step-label-icon completed';
        }
        else {
            return 'step-label-icon';
        }
    }
    return (
        <div className={stepLabelIconClasse(props.active , props.completed)}>
            <i>
                {props.icon}
            </i>
        </div>
    )

}
export default IconLabel