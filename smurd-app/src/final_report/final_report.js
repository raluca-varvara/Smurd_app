import React ,{ useEffect, useState }from 'react'
import "./final_report.css"
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlane} from '@fortawesome/free-solid-svg-icons'
import ImageDoctors from "../common/images/Doctors.png"
import Footer from '../footer/footer';
const textProc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in est et elit dignissim fermentum ut vitae diam. Donec in sagittis orci. Ut pretium odio eget consectetur eleifend. Aliquam in neque sed diam euismod lobortis eget eu tortor. Ut vel condimentum nunc, ut posuere sem. Vestibulum at lacus turpis. Mauris hendrerit tristique ante nec laoreet.\n\n Vivamus ac lacinia ligula. Sed consectetur justo urna. Aenean tristique, erat quis pellentesque ornare, turpis arcu semper ligula, sit amet faucibus lacus arcu nec nulla. In lorem ex, tincidunt vitae luctus quis, luctus eget dui. Pellentesque eu dui sagittis, vulputate augue id, gravida dolor. Nam condimentum iaculis imperdiet. Etiam faucibus ligula dapibus, mollis nulla nec, aliquet lectus. Maecenas gravida sodales ornare. Maecenas eu sapien a nisi gravida ornare ut non nisi. Suspendisse arcu purus, accumsan eu elit sit amet, porta lacinia urna. Donec bibendum, purus sit amet gravida tristique, urna lacus gravida arcu, sit amet fermentum mauris tortor ut nisl. Suspendisse eleifend felis odio, ac efficitur massa varius quis. Sed aliquam leo nec elementum maximus. Donec vitae aliquam orci. Sed egestas leo in magna congue, a scelerisque erat tempor. Ut egestas libero sed porttitor placerat.'
const requestNumbers = ["123abc", "1234abcd"]


function FinalReport() {
    let navigate = useNavigate();
    const [reqNb, setReqnb] = useState("")
    const [addr, setAddr] = useState("")
    const [accidentType, setAccidentType] = useState("")
    const [amb, setAmb] = useState("")
    const [pacient, setPacient] = useState("")
    const [methods, setMethods] = useState("")

    const submitFunct = event =>{
        if(reqNb == ""){
            alert("Complete the request number")
            event.preventDefault()
            const el = document.getElementById('requestNr');
            el.classList.remove("formInput")
            el.classList.add("formInputBad")
            
            return false
        }
        else if(!requestNumbers.includes(reqNb)){
            alert("Complete a valid request number")
            event.preventDefault()
            const el = document.getElementById('requestNr');
            el.classList.remove("formInput")
            el.classList.add("formInputBad")
            
            return false
        }
        else if(addr == ""){
            alert("Complete the address")
            event.preventDefault()
            const el = document.getElementById('address');
            el.classList.remove("formInput")
            el.classList.add("formInputBad")
            
            return false
        }
        else if(accidentType == ""){
            alert("Complete the accident type")
            event.preventDefault()
            const el = document.getElementById('accident');
            el.classList.remove("formInput")
            el.classList.add("formInputBad")
            
            return false
        }
        else if(amb == ""){
            alert("Complete if abulance was needed")
            event.preventDefault()
            const el = document.getElementById('ambulance');
            el.classList.remove("formInput")
            el.classList.add("formInputBad")
            
            return false
        }
        else if(pacient == ""){
            alert("Complete pacient's state")
            event.preventDefault()
            const el = document.getElementById('pacientState');
            el.classList.remove("formInput")
            el.classList.add("formInputBad")
            
            return false
        }
        else if(methods == ""){
            alert("Complete methods applied")
            event.preventDefault()
            const el = document.getElementById('methodsApplied');
            el.classList.remove("formInput")
            el.classList.add("formInputBad")
            
            return false
        }
        return true
    };

    return(
        <div className = "finalReportWrapper">

            <div className = "header">
                <h1>Submit the report for your intervention</h1>
                <p>For a better service please submit your report and describe as much as you can</p>
            </div>
            <div className = "procedure">
                <div className = "procedureForm">

                
                    <form className = "procedureInputs" onSubmit={submitFunct}>
                        <label className = "formLabel">Request Number</label>
                        <input id = "requestNr" type = "text" className = "formInput" placeholder='Request number'  onChange={(e) => setReqnb(e.target.value)}></input>
                        <label className = "formLabel">Address</label>
                        <input id = "address" type = "text" className = "formInput"  placeholder='Address'  onChange={(e) => setAddr(e.target.value)}></input>
                        <label className = "formLabel">Date</label>
                        <DatePicker
                            id = "datePicked"
                            name="startDate"
                            dateFormat="yyyy/MM/dd"
                            className = "formInput"
                        />
                        <label className = "formLabel">Accident type</label>
                        <select name="category" id="accident" className = "formInput"  onChange={(e) => setAccidentType(e.target.value)}>
                            <option value="AccidentType">Complete accident type</option>
                            <option value="Lesin">Lesin</option>
                            <option value="Arsura">Arsura</option>
                            <option value="Accidentrutier">Accident rutier</option>
                        </select>
                        <label className = "formLabel">Ambulance needed</label>
                        <select name="category" id="ambulance" className = "formInput"  onChange={(e) => setAmb(e.target.value)}>
                            <option value="NeededAmb">needed ambulance</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <label className = "formLabel">Pacient state</label>
                        <input id = "pacientState" type = "text" className = "formInput"  placeholder='Pacient state'  onChange={(e) => setPacient(e.target.value)}></input>
                        <label className = "formLabel">Methods applied</label>
                        <input type="textarea" 
                            name="textValue"
                            className = "formInput"
                            placeholder='Methods applied'
                            id = "methodsApplied"
                            onChange={(e) => setMethods(e.target.value)}
                        />
                        <button className = "buttonProcedure" onClick={() => navigate("/")}>Submit</button>
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

export default FinalReport
