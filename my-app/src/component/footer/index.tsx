import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
const Footer = () => {

    return (
        <div className="footer pl-3 pr-3 pt-5 pb-5">
            <div className="d-flex justify-content-between">
                <div className="logo d-flex align-items-center p-5">
                    <div className="ram">
                        <img src="./assets/images/logo-white.png" />
                    </div>
                    <div className="one-world ">
                        <img src="./assets/images/oneworld-logo.png" />
                    </div>
                </div>
                <div className="contact d-flex align-items-center">
                    <div className="phone">
                        <i><FiPhoneCall /></i> <span>+212 5 22 00 11 22</span>
                    </div>
                    <div className="email">
                        <i><HiOutlineMail /></i><span>Contact@ram.com</span>
                    </div>
                </div>
            </div>
        </div>
    )


}
export default Footer 