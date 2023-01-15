import React ,{ useState, useEffect }from 'react'
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

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ReportAccident() {
        let navigate = useNavigate();
    const [location, setLocation] = useState(false);
    const [open, setOpen] = React.useState(true);
    const [symptoms, setSymptoms] = useState("");
    const [emergencyType, setEmergencyType] = useState("");
    const [traffic, setTraffic] = useState("");
    const [time, setTime] = useState("");
    
    const handleClose = () => {
        setOpen(false);
    };

    const submitFunct = event => {
            
        if(symptoms == ""){
            alert("Complete the symptoms")
            event.preventDefault()
            const el = document.getElementById('symptoms');
            el.classList.add("reportBad")
            
            return false
        }
        else if(emergencyType == ""){
            alert("complete the emergency type")
            event.preventDefault()
            const el = document.getElementById('emergency');
            el.classList.add("reportBad")
            return false
        }
        else if(traffic == ""){
            alert("complete the traffic")
            event.preventDefault()
            const el = document.getElementById('traffic');
            el.classList.add("reportBad")
            return false
        }
        else if(time == ""){
            alert("complete the time")
            event.preventDefault()
            const el = document.getElementById('time');
            el.classList.add("reportBad")
            return false
        }

        else{
            alert("Application succseful")
            navigate("/")
        }

        return true
    };




    return(
        <div className="donationsWrapper">
            
            <div className='centered_column'>
                <h1>Report an accident!</h1>
                
                <img src={map2} alt=""></img>
                
                <h3>Place yourself on the map for a more exact location</h3>
                 <form className = "reportAccRow" onSubmit={submitFunct}>
                    <div className = "reportAccColumn">
                        <label className = "reportAccLabel">
                            Symptoms:
                            <input id="symptoms" type="text" onChange={(e) => setSymptoms(e.target.value)}/>
                        </label>
                        
                            <label className = "reportAccLabel">
                        Emergency type:
                            <input type="text" id="emergency" onChange={(e) => setEmergencyType(e.target.value)}/>
                        </label>
                        
                            
                            <label className = "reportAccLabel">
                            Traffic  level:
                            <input type="text" id = "traffic" onChange={(e) => setTraffic(e.target.value)}/>
                        </label>
                    </div>
                    <div className='reportAccColumn'>
                        <label className = "reportAccLabel">
                            Time passed:
                            <input type="text" id = "time" onChange={(e) => setTime(e.target.value)}/>
                        </label>
                        
                            <label className = "reportAccLabel1">
                        More details:
                            <input type="text" className = "reportAccInput"/>
                        </label>
                        
                        
                    </div>
                    <div className='reportAccColumn'>
                    <button className="reportAccidentButton">
                                Report Accident
                            </button>
                    </div>
                      
                    
                        
                    </form>
                
                

            </div>
            <Footer />
            <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Please activate your location</DialogTitle>
                        <div className = "locationText">Please activate your location</div>
                        <DialogActions>
                            <button onClick={handleClose} className="locationBut">Activate Location</button>
                            
                        </DialogActions>
                    </Dialog>

        </div>
      
    )
    
};

