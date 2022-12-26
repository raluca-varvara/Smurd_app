import React ,{ useState }from 'react'
import "./final_report.css"
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlane} from '@fortawesome/free-solid-svg-icons'
import ImageDoctors from "../common/images/Doctors.png"

const textProc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in est et elit dignissim fermentum ut vitae diam. Donec in sagittis orci. Ut pretium odio eget consectetur eleifend. Aliquam in neque sed diam euismod lobortis eget eu tortor. Ut vel condimentum nunc, ut posuere sem. Vestibulum at lacus turpis. Mauris hendrerit tristique ante nec laoreet.\n\n Vivamus ac lacinia ligula. Sed consectetur justo urna. Aenean tristique, erat quis pellentesque ornare, turpis arcu semper ligula, sit amet faucibus lacus arcu nec nulla. In lorem ex, tincidunt vitae luctus quis, luctus eget dui. Pellentesque eu dui sagittis, vulputate augue id, gravida dolor. Nam condimentum iaculis imperdiet. Etiam faucibus ligula dapibus, mollis nulla nec, aliquet lectus. Maecenas gravida sodales ornare. Maecenas eu sapien a nisi gravida ornare ut non nisi. Suspendisse arcu purus, accumsan eu elit sit amet, porta lacinia urna. Donec bibendum, purus sit amet gravida tristique, urna lacus gravida arcu, sit amet fermentum mauris tortor ut nisl. Suspendisse eleifend felis odio, ac efficitur massa varius quis. Sed aliquam leo nec elementum maximus. Donec vitae aliquam orci. Sed egestas leo in magna congue, a scelerisque erat tempor. Ut egestas libero sed porttitor placerat.'


function FinalReport(){
    

    return(
        <div className = "finalReportWrapper">

            <div className = "header">
                <h1>Submit the report for your intervention</h1>
                <p>For a better service please submit your report and describe as much as you can</p>
            </div>
            <div className = "procedure">
                <div className = "procedureForm">

                
                    <form className = "procedureInputs">
                        <label className = "formLabel">Request Number</label>
                        <input id = "requestNr" type = "text" className = "formInput" placeholder='Request number'></input>
                        <label className = "formLabel">Address</label>
                        <input id = "address" type = "text" className = "formInput"  placeholder='Address'></input>
                        <label className = "formLabel">Date</label>
                        <DatePicker
                            id = "datePicked"
                            name="startDate"
                            dateFormat="yyyy/MM/dd"
                            className = "formInput"
                        />
                        <label className = "formLabel">Accident type</label>
                        <select name="category" id="accident" className = "formInput">
                            <option value="Lesin">Lesin</option>
                            <option value="Arsura">Arsura</option>
                            <option value="Accidentrutier">Accident rutier</option>
                        </select>
                        <label className = "formLabel">Ambulance needed</label>
                        <select name="category" id="ambulance" className = "formInput">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <label className = "formLabel">Pacient state</label>
                        <input type = "text" className = "formInput"  placeholder='Pacient state'></input>
                        <label className = "formLabel">Methods applied</label>
                        <input type="textarea" 
                            name="textValue"
                            className = "formInput"
                            placeholder='Methods applied'
                        />
                        <button className = "buttonProcedure">Submit</button>
                    </form>
                </div>
                <div className = "procedureDescription">
                    <h2 className = "procedureTitle">Procedure</h2>
                    <div className = "display-linebreak">{textProc}</div>
                </div>

            </div>
            <img src = {ImageDoctors} width = "100%" className  = "imgDoctors"></img>


        </div>

    )
    
};

export default FinalReport
