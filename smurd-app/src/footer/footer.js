import React ,{ useState }from 'react'
import "./footer.css"
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
const backgroundStyle = {
    width: "100%",
    height: "800px",
    margin:"0",
    overflow:"auto",
    backgroundImage: `url(${BackgroundImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
    
  };
const icon_class={
    color:"#2A4036",
    height:50,
    margin:0
}
function Footer(){
    const [lang, setLang] = useState(["Romanian", "English"]);
    const [value, setValue] = useState("Red");
    return(
        <div style = {backgroundStyle}>
            <div className='actionsWrapper'>
                <div className = "detailsActions">
                    <div className = "column">
                        <FontAwesomeIcon icon={faPlane} style={icon_class} size="2x"/>
                        <div className = "columnText">
                            <p className = "number">4</p>
                            <p className = "columnDescription">Aeroname si elicoptere</p>
                        </div>
                    </div>
                    <div className = "column">
                        <FontAwesomeIcon icon={faUserGroup} style={icon_class} size="2x"/>
                        <div className = "columnText">
                            <p className = "number">3791</p>
                            <p className = "columnDescription">Persoane calificate</p>
                        </div>
                    </div>
                    <div className = "column">
                        <FontAwesomeIcon icon={faHourglass} style={icon_class} size="2x"/>
                        <div className = "columnText">
                            <p className = "number">21</p>
                            <p className = "columnDescription">Ani de activitate</p>
                        </div>
                    </div>
                    <div className = "column">
                        <FontAwesomeIcon icon={faAmbulance} style={icon_class} size="2x"/>
                        <div className = "columnText">
                            <p className = "number">221</p>
                            <p className = "columnDescription">Interventii de urgenta</p>
                        </div>
                    </div>
                    <div className = "column">
                        <FontAwesomeIcon icon={faHelicopter} style={icon_class} size="2x"/>
                        <div className = "columnText">
                            <p className = "number">1670</p>
                            <p className = "columnDescription">Misiuni aeromedicale</p>
                        </div> 
                    </div>
                    <div className = "column">
                        <FontAwesomeIcon icon={faUserDoctor} style={icon_class} size="2x"/>
                        <div className = "columnText">
                            <p className = "number">124</p>
                            <p className = "columnDescription">Echipaje smurd</p>
                        </div>
                    </div>
                    <div className = "column">
                        <FontAwesomeIcon icon={faBaby} style={icon_class} size="2x"/>
                        <div className = "columnText">
                            <p className = "number">124</p>
                            <p className = "columnDescription">Transporturi nou nascuti</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className = "actionsWrapper">
                <div className = "detailsActions1">

                    <div className = "detailsColumn">
                        <div className='logo'>
                            <img src={logo} width={"50"}
                                    height={"50"} />
                            <div className = "logoname">
                                <p>Help<span>me!</span></p>
                            </div>
                        </div>
                        <p className = "text">Nam posuere accumsan porta. Integer id tincidunt sit amet sed libero.</p>
                        <p className = "text">© 2006–2016 Fundația pentru SMURD România.</p>
                    </div>

                    <div className = "detailsColumn">
                        <p className = "footerHeader">Company</p>
                        <p className = "text">Donec dignissim</p>
                        <p className = "text">Donec dignissim</p>
                        <p className = "text">Donec dignissim</p>
                        <p className = "text">Donec dignissim</p>
                    </div>
                    <div className = "detailsColumn">
                        <p className = "footerHeader">Services</p>
                        <p className = "text">Donec dignissim</p>
                        <p className = "text">Donec dignissim</p>
                        <p className = "text">Donec dignissim</p>
                        <p className = "text">Donec dignissim</p>
                    </div>
                    <div className = "detailsColumn">
                        <p className = "footerHeader">Resources</p>
                        <p className = "text">Donec dignissim</p>
                        <p className = "text">Donec dignissim</p>
                        <p className = "text">Donec dignissim</p>
                        <p className = "text">Donec dignissim</p>
                    </div>
                    <div className = "detailsColumn">
                        <div className = "socialMedia">
                            {/* <img src={instagram} className="photo" alt="Instagram Logo" />
                            <img src={linkedin} className="photo" alt="LinkedIn Logo" />
                            <img src={facebook} className="photo" alt="Facebook Logo" />
                            <img src={twitter} className="photo" alt="Twitter Logo" /> */}
                            <FontAwesomeIcon icon={faFacebook} className="socialMediaLogo" />
                            <FontAwesomeIcon icon={faLinkedin} className="socialMediaLogo" />
                            <FontAwesomeIcon icon={faInstagram} className="socialMediaLogo" />
                            <FontAwesomeIcon icon={faTwitter} className="socialMediaLogo" />
                        </div>
                        <div className='detailsActions'>
                            <p>
                                Language:
                            </p>
                            <select name="category" id="category">
                                    <option value="English">English</option>
                                    <option value="Romanian">Romanian</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
};

export default Footer
