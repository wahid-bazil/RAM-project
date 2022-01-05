import React from "react";
import { MdNavigateNext } from "react-icons/md";


const Accordions: React.FC<{ expand: (index: number) => void, active: boolean, completed: boolean, phaseLabel: String, index: number }> = (props) => {

    function PhaseLabelClasse(active: boolean, completed: boolean) {
        if (active) {

            return 'active'

        } else if (completed) {

            return 'completed'
        }
        else {
            return ''
        }
    }

    function SpanClasse(active: boolean, completed: boolean) {
        if (active) {

            return 'active'

        } else if (completed) {

            return 'completed'
        }
        else {
            return ''
        }
    }

    function IconClasse(active: boolean, completed: boolean) {
        if (active) {

            return 'accordion-icon active'

        } else if (completed) {

            return 'accordion-icon completed'
        }
        else {
            return 'accordion-icon '
        }
    }

    return (
        <div className="accordion d-flex justify-content-between ">
            <h6 className={PhaseLabelClasse(props.active, props.completed)}>
                {props.phaseLabel}
            </h6>
            <span className={SpanClasse(props.active, props.completed)} />
            {/*} <i onClick={()=>props.expand(props.index)} className={IconClasse(props.active, props.completed)}>
                <MdNavigateNext />
    </i>*/}
            <i className={IconClasse(props.active, props.completed)}>
                <MdNavigateNext />
            </i>
        </div>
    )
}
export default Accordions