import React ,{ useState }from 'react'
import DatePicker from 'react-datepicker';
import "./security.css"

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved, faMailBulk, faLocation} from '@fortawesome/free-solid-svg-icons'
const text = 'All of our products are guided by three important principles: With one of the world’s most advanced security infrastructures, our products are secure by default. We strictly uphold responsible data practices so every product we build is private by design. And we create easy to use privacy and security settings so youre in control.'

function Security(props){

    return(
        <div className='securityWrapper'>
            <FontAwesomeIcon icon={faShieldHalved} className="securityIcon" size="6x"/>
            <h1 className='securityTitle'> <span>We keep your </span> personal information private, safe, and secure.</h1>
            <div className='securityText'>All of our products are guided by three important principles: With one of the world’s most advanced security infrastructures, our products are secure by default. We strictly uphold responsible data practices so every product we build is private by design. And we create easy to use privacy and security settings so youre in control.</div>
            <h1 className='securityTitle'><span>Protecting your privacy starts with</span> the world’s most advanced security.</h1>
            <div className='securityText'>
                Your privacy is protected across Google with built-in security designed to automatically stop threats before they reach you.
            </div>
        </div>
        
    );

}

export default Security;