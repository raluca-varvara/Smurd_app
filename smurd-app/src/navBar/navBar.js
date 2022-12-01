import React from 'react'
import logo from '../common/images/red-cross.png';
import "./navBar.css"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone} from '@fortawesome/free-solid-svg-icons'

import {

    Button,
    Form
} from 'reactstrap';

const textStyle = {
    color: 'white',
    textDecoration: 'none',
    fontFamily: 'Serif'
};



function NavigationBar(){
    //let navigate = useNavigate(); 
    // const routeChange = () =>{ 
    //     let path = `/login`; 
    //     navigate(path);
    // }
    // const logout = () =>{ 
    //     window.localStorage.setItem('MY_APP_STATE', null);
    //     window.localStorage.setItem('MY_ROLE', null);
    //     let path = `/`; 
    //     navigate(path);
    // }
    return(
        <div className='color-nav'>
        
            <div className='logo'>
                <img src={logo} width={"50"}
                        height={"50"} />
                <div className = "logoname">
                    <p>Help<span>me!</span></p>
                </div>
                
            </div>

            <div className="nav-buttons-div">
                <Button  className = "nav-button" >Home</Button>
                <Button  className = "nav-button" >Become a volunteer</Button>
                <Button  className = "nav-button" >First Aid Kits</Button>
                
            </div>

            <div className="signUpDiv">
                <Button  className = "color-button" >Sign In</Button>
                {/* <Button bsStyle="primary" className = "color-button" >Logout</Button> */}
                 {/* <Button bsStyle="primary" className = "color-button" onClick={routeChange}>Login</Button>
                    <Button bsStyle="primary" className = "color-button" onClick={logout}>Logout</Button> */}
            </div>

            <div className = "contact">
                <div className = "contact-icon">
                    <FontAwesomeIcon icon={faPhone} size="lg"/>
                </div>
                
                
                <div className="contact-call">
                    <p className="phone">+233554205473</p>
                    <p>Nonstop</p>
                </div>
            </div>
                   
                    
                    

            
        
        </div>
    )
    
};

export default NavigationBar
