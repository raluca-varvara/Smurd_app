import React ,{ useState }from 'react'
import "./applyforvolunteer.css"
import "../footer/footer.css"
import Combobox from "react-widgets/Combobox";
import DatePicker from 'react-datepicker';
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
import ImageDoctors from "../common/images/Doctors.png"
import {useRef, useEffect} from 'react';

const textProc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in est et elit dignissim fermentum ut vitae diam. Donec in sagittis orci. Ut pretium odio eget consectetur eleifend. Aliquam in neque sed diam euismod lobortis eget eu tortor. Ut vel condimentum nunc, ut posuere sem. Vestibulum at lacus turpis. Mauris hendrerit tristique ante nec laoreet.\n\n Vivamus ac lacinia ligula. Sed consectetur justo urna. Aenean tristique, erat quis pellentesque ornare, turpis arcu semper ligula, sit amet faucibus lacus arcu nec nulla. In lorem ex, tincidunt vitae luctus quis, luctus eget dui. Pellentesque eu dui sagittis, vulputate augue id, gravida dolor. Nam condimentum iaculis imperdiet. Etiam faucibus ligula dapibus, mollis nulla nec, aliquet lectus. Maecenas gravida sodales ornare. Maecenas eu sapien a nisi gravida ornare ut non nisi. Suspendisse arcu purus, accumsan eu elit sit amet, porta lacinia urna. Donec bibendum, purus sit amet gravida tristique, urna lacus gravida arcu, sit amet fermentum mauris tortor ut nisl. Suspendisse eleifend felis odio, ac efficitur massa varius quis. Sed aliquam leo nec elementum maximus. Donec vitae aliquam orci. Sed egestas leo in magna congue, a scelerisque erat tempor. Ut egestas libero sed porttitor placerat.'
const countys = ['Bucureşti',
'Alba',
'Arad',
'Arges',
'Bacău',
'Bihor',
'Bistriţa-Năsăud',
'Botoşani',
'Braşov',
'Brăila',
'Buzău',
'Caraş-Severin',
'Călăraşi',
'Cluj',
'Constanţa',
'Covasna',
'Dâmboviţa',
'Dolj',
'Galaţi',
'Giurgiu',
'Gorj','Harghita','Hunedoara','Ialomiţa','Iaşi','Ilfov','Maramureş','Mehedinţi','Mureş','Neamţ','Olt','Prahova','Satu Mare','Sălaj','Sibiu','Suceava','Teleorman','Timiş','Tulcea','Vâlcea','Vaslui','Vrancea',]

export default function Applyforvolunteer() {
        const [gender, setGender] = useState(["Man", "Woman"]);
        let navigate = useNavigate();
        const [name, setName] = useState("");
        const [fname, setFName] = useState("");
        const [date, setDate] = useState("");
        const [county, setCounty] = useState("");
        const [city, setCity] = useState("");
        const [id, setId] = useState("");

        const submitFunct = event => {
            
            if(name == ""){
                alert("Complete your first name")
                event.preventDefault()
                const el = document.getElementById('firstname');
                el.classList.remove("formInput")
                el.classList.add("formInputBad")
                
                return false
            }
            else if(fname == ""){
                alert("complete your last name")
                event.preventDefault()
                const el = document.getElementById('lastname');
                el.classList.remove("formInput")
                el.classList.add("formInputBad")
                return false
            }
            else if (city ==""){
                alert("complete your city")
                event.preventDefault()
                const el = document.getElementById('city');
                el.classList.remove("formInput")
                el.classList.add("formInputBad")
                return false
            }
            else if (county ==""){
                alert("complete your county")
                event.preventDefault()
                const el = document.getElementById('county');
                el.classList.remove("formInput")
                el.classList.add("formInputBad")
                return false
            }
            else{
                alert("Application succseful")
            }

            return true
        };
    return(
        <div className = "finalReportWrapper">

        <div className = "headerTitle">
            <h1>Apply here to become a volunteer!</h1>
            <p className = "headerp">Register your first aid certificate and help people in need!</p>
        </div>
        <div className = "procedure">
            <div className = "procedureForm">

            
                <form className = "procedureInputs" onSubmit={submitFunct}>
                    <label className = "formLabel">First Name</label>
                    <input id = "firstname" type = "text" className = 'formInput' placeholder='First Name' onChange={(e) => setName(e.target.value)}></input>
                    <label className = "formLabel">Last Name</label>
                    <input id = "lastname" type = "text" className = "formInput"  placeholder='Last Name' onChange={(e) => setFName(e.target.value)}></input>
                    <label className = "formLabel">Gender</label>
                    <div className="answer">
                                <input className='radio1' type='radio' id='true' name='answer1' value='ture' />
                                <label className='label' htmlFor='true'>Female</label>
                                <input className='radio1' type='radio' id='false' name='answer1' value='false' />
                                <label className='label' htmlFor='false'>Male</label>
                    </div>
                    <label className = "formLabel">Date</label>
                    <DatePicker
                            id = "datePicked"
                            name="startDate"
                            dateFormat="yyyy/MM/dd"
                            className = "formInput"
                            onChange={(e) => setDate(e.target.value)}
                        />
                    <label className = "formLabel">County</label>
                    <select name="category" id="county" className = "formInput" onChange={(e) => setCounty(e.target.value)}>
                        {countys.map((county) => <option value={county}>{county}</option>)}

                    </select>
                    <label className = "formLabel">City</label>
                    <select name="category" id="city" className = "formInput" onChange={(e) => setCity(e.target.value)}>
                        {countys.map((county) => <option value={county}>{county}</option>)}
                    </select>
                    <label className = "formLabel">Certificate ID number</label>
                    <input type = "text" className = "formInput"  placeholder='Certificate Id Number' onChange={(e) => setId(e.target.value)}></input>
                    <label className = "formLabel">Upload ID photo</label>
                    <input type="file"  className = "formInput1" accept="image/png, image/gif, image/jpeg" />
                    <button className = "buttonProcedure" onClick={() => navigate("/")}>Submit </button>
                </form>
            </div>
            <div className = "procedureDescription">
                <h2 className = "procedureTitle">Procedure</h2>
                <div className = "display-linebreak">{textProc}</div>
            </div>

        </div>
        <img src = {ImageDoctors} width = "100%" className  = "imgDoctors"></img>

    <Footer/>
    </div>
      
    )
    
};

