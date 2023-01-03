import React ,{ useState }from 'react'
import "./accident.css"
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

export default function Accident() {
    const [gender, setGender] = useState(["Man", "Woman"]);
     let navigate = useNavigate(); 
  
    return(
        <div className="donationsWrapper">
            
            <div className='centered_column'>
                <h1>Accident happened</h1>
                
                <img src={map2} alt=""></img>
                
                <h3>Location</h3>
                 <form>
                        <label>
                        Exact location:
                         <input type="text" value ="Strada Fabricii" />
                    </label>
                    <label>
                        Symptoms:
                         <input type="text" value ="Lesinat, fara rani vizibile" />
                    </label>
                    
                        <label>
                       Emergency type:
                         <input type="text"  value = "Urgent"/>
                    </label>
                     
                        
                        <label>
                        Traffic  level:
                         <input type="text" value ="Liber"/>
                    </label>
                    
                        <label>
                        Time passed:
                         <input type="text" value ="in jur de 2-3 minute"/>
                    </label>
                    
                      <label>
                        Estimated time to the emergency:
                         <input type="text" value = "6 minutes"/>
                    </label>

                        <label>
                       More details:
                         <input type="text" value="persoana s-a prabusit in parcare dintr-o data"/>
                    </label>
                    
                    
                       <button className="accept" onClick={() => navigate("/acceptedaccident")}>
                            Accept 
                        </button>
                       <button className="decline">
                           Decline
                        </button>
                    </form>
                
                

            </div>
            <Footer />


        </div>
      
    )
    
};

