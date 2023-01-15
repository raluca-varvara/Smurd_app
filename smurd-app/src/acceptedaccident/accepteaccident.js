import React ,{ useState }from 'react'
import "./acceptedaccident.css"
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

export default function Accident (props) {
    const [gender, setGender] = useState(["Man", "Woman"]);
    const [diagn, setDiagn] = useState("");
    const [open, setOpen] = React.useState(false);
     let navigate = useNavigate(); 
    const handleClose = () => {
        setOpen(false);
    };
    return(
        <div className="donationsWrapper">
            
            <div className='wrapperAccident'>
                <h1 className = "accidentH">Accident happened</h1>

                <div>
                    <div className = "rowAccident">
                        <div className = "columnAccident">
                        <label className = "accidentLabel">
                                Request ID:
                                <input type="text" value ="123abc" />
                            </label>
                            <label className = "accidentLabel">
                                Exact location:
                                <input type="text" value ="Strada Fabricii" />
                            </label>
                            <label className = "accidentLabel">
                                Symptoms:
                                <input type="text" value ="Lesinat, fara rani vizibile" />
                            </label>
                            
                            <label className = "accidentLabel">
                            Emergency type:
                                <input type="text"  value = "Urgent"/>
                            </label>
                            
                                
                            <label className = "accidentLabel">
                                Traffic  level:
                                <input type="text" value ="Liber"/>
                            </label>
                            
                            <label className = "accidentLabel">
                                Time passed:
                                <input type="text" value ="2-3 minute"/>
                            </label>
                            
                            <label className = "accidentLabel">
                                Estimated time to the emergency:
                                <input type="text" value = "6 minutes"/>
                            </label>
                        </div>
                        <div className = "columnAccident">
                            <img src={map2} alt="" className = "imageAcc"></img>                       
                            <h3>Location</h3>
                        </div>
                    </div>
                    <div  className = "rowAccident">
                        <label >
                        Enter your diagnosis:
                        <select name="category" id="ambulance" className = "formInput"  onChange={(e) => setDiagn(e.target.value)}>
                            <option value="diagnosis">Select diagnosis</option>
                            <option value="choking">Choking</option>
                            <option value="fainting">Fainting</option>
                            
                        </select>
                        </label>
                        
                        
                        <button className="accept" onClick={() => navigate("/firststeps",{state:{diagn}})}>
                                Need help? 
                            </button>
                        <button className="decline" onClick={() => setOpen(true)}>
                            Call ambulance
                            </button>
                    </div>
                    <div className = "acceptedRow">
                        <button className="arrived">
                                Arrived at the emergency location
                        </button>
                    </div>
                    
                    </div>
                

            </div>
                
            <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Subscribe</DialogTitle>
                        <div>
                            Are you sure you need and ambulance
                        </div>
                        <DialogActions>
                            <button onClick={handleClose} className="cardButton">Yes</button>
                            <button onClick={handleClose} className="cardButton">No</button>
                        </DialogActions>
                    </Dialog>

            
            <Footer />


        </div>
      
    )
    
};

