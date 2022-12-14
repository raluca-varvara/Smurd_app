import React ,{ useState }from 'react'
import "./donations.css"
import "../navBar/navBar.css"
import Combobox from "react-widgets/Combobox";
import DropdownList from "react-widgets/DropdownList";


import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlane, faUserGroup, faHourglass, faAmbulance, faHelicopter, faBaby, faUserDoctor, faMedkit, faT} from '@fortawesome/free-solid-svg-icons'
import BackgroundImg from '../common/images/footer_background.png';
import logo from '../common/images/red-cross.png';
import instagram from '../common/images/brands/instagram.svg'
import facebook from '../common/images/brands/facebook.svg'
import twitter from '../common/images/brands/square-twitter.svg'
import linkedin from '../common/images/brands/linkedin.svg'
import { faFacebook, faInstagram,faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"


function Donations(){
    const [lang, setLang] = useState(["Romanian", "English"]);

    return(
        <div className = "donationsWrapper">
            <div className='centered_column'>
                
                    <div className='donationText'>
                        <div className='donationDescription'>
                            <h2>Would you like to help us the otherway?</h2>
                            <p className = "pText">Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.</p>
                        </div>
                        <div classname = "donationRow">
                            <div className = "donationColumn">
                                <p className = "donationMake">Choose a sum from below</p>
                            </div>
                        </div>
                    </div>
                    <div className='donationBillRow'>
                        <button className = "donationBill">
                            <p>5$</p>
                        </button>
                        <button className = "donationBill">
                            <p>10$</p>
                        </button>
                        <button className = "donationBill">
                            <p>25$</p>
                        </button>
                        <button className = "donationBill">
                            <p>50$</p>
                        </button>
                        <button className = "donationBill">
                            <p>100$</p>
                        </button>
                    </div>
                    <div className='paymentRow'>
                        <div className = "paymentWrapper">
                            <button className="paymentButton">
                                Continue to payment
                            </button>
                        </div>
                    </div>
                
                

            </div>

        </div>

    )
    
};

export default Donations
