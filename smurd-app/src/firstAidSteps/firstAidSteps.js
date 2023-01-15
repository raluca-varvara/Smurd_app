import React ,{ useState }from 'react'
import DatePicker from 'react-datepicker';
import "./firstAidSteps.css"

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlane } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from "react-router-dom";

import {
    HeimlichS1,
    HeimlichS2,
    HeimlichS3,
    HeimlichS4,
    FaintingS1,
    FaintingS2,
    FaintingS3,
    FaintingS4,
    FaintingS5
} from "../common/images/first_aid_steps/images.js"




function FirstAidSteps(){
    let images = {"choking":[HeimlichS1, HeimlichS2, HeimlichS3, HeimlichS4], "fainting":[FaintingS1,FaintingS2,FaintingS3,FaintingS4,FaintingS5]} 
    const { state } = useLocation();
    console.log(state);
            return(
        <div className='firstAidWrapper'>
            <h2 className = "firstAidTitle">First aid steps for <span>{state.diagn}</span></h2>
            <div className='image_container'>
                {images[state.diagn].map((img_src) => <img src={img_src} />)}
            </div>
        </div>
        
    );

}

export default FirstAidSteps;
