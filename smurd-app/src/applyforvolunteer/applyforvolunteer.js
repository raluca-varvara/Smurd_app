import React ,{ useState }from 'react'
import "./applyforvolunteer.css"
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

export default function Applyforvolunteer() {
        const [gender, setGender] = useState(["Man", "Woman"]);
  
    return(
        <div className = "donationsWrapper">
            <div className='centered_column'>
                <h1>Apply here to become a volunteer!</h1>
                <h3>Register your first aid certificate and help people in need!</h3>
                 <form>
                      <label>
                        First name:
                         <input type="text" />
                    </label>
                    
                        <label>
                        Last name:
                         <input type="text" />
                    </label>
                     
                        <div className='detailsActions'>
                        <label>Gender:
                            <br></br>
                    <select name="category" id="category">
                                    <option value="Music">Male</option>
                                    <option value="Geography">Female</option>
                            </select>
                        </label>
                        </div>
                        <label>
                        Date of birth:
                         <input type="text" />
                    </label>
                    
                        <label>
                        County:
                         <input type="text" />
                    </label>
                    
                        <label>
                       City:
                         <input type="text" />
                    </label>
                    
                              <label>
                       Certificate ID number:
                         <input type="text" value />
                    </label>
                    
                              <label>
                       Upload a photo:
                         <input type="submit" value={"Upload file"} />
                        </label>
                       <button className="registerCertificate">
                            Register Certificate
                        </button>
                    </form>
                
                

            </div>
            <Footer />


        </div>
      
    )
    
};

