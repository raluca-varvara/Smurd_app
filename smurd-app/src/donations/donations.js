import React ,{ useState }from 'react'
import "./donations.css"
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

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



function Donations() {
    let navigate = useNavigate();
    const [donation, setDonation] = useState(5);
    const [open, setOpen] = React.useState(false);
    const [cvv, setCvv] = useState("");
    const [cardNb ,setCardNb] = useState("")
    const [name, setName] = useState("")

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
       navigate("/")
    };
    const handlePay = () => {
        if(cvv=="" || cardNb == "" || name ==""){
            alert("Please complete all the needed info")
        }
        else{
            alert("Succseful donation");
            setOpen(false);
            navigate("/")
        }
         
        
    };

    return(
        <div className = "donationsWrapper">
            <div className='centered_column'>
                
                    <div className='donationText'>
                        <div className='donationDescription'>
                            <h2>Would you like to help us the otherway?</h2>
                            <p className = "pText">Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.</p>
                        </div>
                        <div className = "donationRow">
                            <div className = "donationColumn">
                                <p className = "donationMake">Choose a sum from below</p>
                            </div>
                        </div>
                    </div>
                    <div className='donationBillRow'>
                        <button id="5" className = {
                                donation == 5 ? 'donationBillActive' : 'donationBill'
                                    } onClick={() => setDonation(5)}>
                            <p>5$</p>
                        </button>
                        <button id="10" className = {
                                donation == 10 ? 'donationBillActive' : 'donationBill'
                                    } onClick={() => setDonation(10)}>
                            <p>10$</p>
                        </button>
                        <button id="25" className = {
                                donation == 25 ? 'donationBillActive' : 'donationBill'
                                    } onClick={() => setDonation(25)}>
                            <p>25$</p>
                        </button>
                        <button id="50" className = {
                                donation == 50 ? 'donationBillActive' : 'donationBill'
                                    } onClick={() => setDonation(50)}>
                            <p>50$</p>
                        </button>
                        <button id="100" className = {
                                donation == 100 ? 'donationBillActive' : 'donationBill'
                                    } onClick={() => setDonation(100)}>
                            <p>100$</p>
                        </button>
                    </div>
                    <div className='paymentRow'>
                        <div className = "paymentWrapper">
                            <button className="paymentButton" onClick={handleClickOpen}>
                                Continue to payment
                            </button>
                        </div>
                    </div>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Subscribe</DialogTitle>
                        <DialogContent>
                        <div className='dialogText'>
                            To proceed the donation of <span>{donation}$ </span> enter the details of your card
                        </div>
                        <div className='cardLabel'>Card number</div>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="card_number"
                            label="Card number"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(e) => setCardNb(e.target.value)}
                        />
                        <div  className='cardLabel'>CVV</div>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="cvv"
                            label="CVV"
                            type="password"
                            fullWidth
                            variant="standard"
                            onChange={(e) => setCvv(e.target.value)}
                        />
                        <div  className='cardLabel'>Name</div>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(e) => setName(e.target.value)}
                        />
                        </DialogContent>
                        <DialogActions>
                            <button onClick={handleClose} className="cardButton">Cancel</button>
                            <button onClick={handlePay} className="cardButton">Pay</button>
                        </DialogActions>
                    </Dialog>
                

            </div>

        </div>

    )
    
};

export default Donations
