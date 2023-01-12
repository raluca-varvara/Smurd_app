import React ,{ useState }from 'react'
import "./firstkits.css"
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

export default function FirstAidKits(){
  
    return(
        <div className = "donationsWrapper">
            <div className='centered_column'>
                
                <img src={MapImage} alt="" />
                
                

            </div>
             <Footer />


        </div>
      
    )
    
};

