import React ,{ useState }from 'react'
import "./reportaccident.css"
import "../navBar/navBar.css"
import "../footer/footer.css"
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
import MapImage from '../common/images/map.png'
import Footer from '../footer/footer';
import map2 from '../common/images/map2.png'

export default function ReportAccident() {
        const [gender, setGender] = useState(["Man", "Woman"]);
  
    return(
        <div className="donationsWrapper">
            
            <div className='centered_column'>
                <h1>Report an accident!</h1>
                
                <img src={map2} alt=""></img>
                
                <h3>Place yourself on the map for a more exact location</h3>
                 <form>
                      <label>
                        Symptoms:
                         <input type="text" />
                    </label>
                    
                        <label>
                       Emergency type:
                         <input type="text" />
                    </label>
                     
                        
                        <label>
                        Traffic  level:
                         <input type="text" />
                    </label>
                    
                        <label>
                        Time passed:
                         <input type="text" />
                    </label>
                    
                        <label>
                       More details:
                         <input type="text" />
                    </label>
                    
                       <button className="reportAccident">
                            Report Accident
                        </button>
                    </form>
                
                

            </div>
            <Footer />


        </div>
      
    )
    
};

