import React ,{ useState,useEffect }from 'react'
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

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function Accident() {
    const [gender, setGender] = useState(["Man", "Woman"]);
    const [open, setOpen] = React.useState(true);
    const [openAccept, setOpenAccept] = React.useState(false);
    const [openDecline, setOpenDecline] = React.useState(false);
    
     let navigate = useNavigate(); 

     const handleClose = () => {
        setOpen(false);
    };

    const handleCloseAccept = () => {
        setOpenAccept(false);
    };

    const handleCloseAcceptYes = () => {
        setOpenAccept(false);
        console.log("DAAAAA")
        navigate("/acceptedaccident");
    };

    const handleCloseDecline = () => {
        setOpenDecline(false);
    };

    const handleCloseDeclineNo = () => {

        setOpenDecline(false);
        navigate("/");
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
                        More details:
                            <input type="text" value="persoana s-a prabusit in parcare dintr-o data" className = "detailsInfo"/>
                        </label>
                        
                        
                        <button className="accept" onClick={() => setOpenAccept(true)}>
                                Accept 
                            </button>
                        <button className="decline" onClick={() => setOpenDecline(true)}>
                            Decline
                            </button>
                    </div>
                    
                    </div>
                

            </div>
            <Footer />
            <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Please activate your location</DialogTitle>
                        <div className = "locationText">Please activate your location</div>
                        <DialogActions>
                            <button onClick={handleClose} className="locationBut">Activate Location</button>
                            
                        </DialogActions>
            </Dialog>

            <Dialog open={openAccept} >
                        <DialogTitle>Subscribe</DialogTitle>
                        <div>
                            Are you sure you want to accept
                        </div>
                        <DialogActions>
                            <button onClick={handleCloseAcceptYes} className="cardButton">Yes</button>
                            <button onClick={handleCloseAccept} className="cardButton">No</button>
                        </DialogActions>
            </Dialog>
            <Dialog open={openDecline} >
                        <DialogTitle>Subscribe</DialogTitle>
                        <div>
                            Are you sure you want to decline
                        </div>
                        <DialogActions>
                            <button onClick={handleCloseDeclineNo} className="cardButton">Yes</button>
                            <button onClick={handleCloseDecline} className="cardButton">No</button>
                        </DialogActions>
            </Dialog>


        </div>
      
    )
    
};

