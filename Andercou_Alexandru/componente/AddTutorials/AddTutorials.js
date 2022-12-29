import React , { useRef, useEffect,useState } from 'react';
import {Button, Container, Jumbotron} from 'reactstrap';
import { FormGroup, Input, Label} from 'reactstrap';
import { useNavigate } from "react-router-dom";
import './AddTutorials.css';

var state=
{
  videoPath:"",
  imgPath:""

}

var submission={
  name:"",
  duration:"",
  video:"",
  certImg:"",
  certNr:"",



}





function AddTutorials (){

  function  handleSubmit()
  {
   submission.name= document.getElementById("nameField").value
   submission.duration=document.getElementById("durField").value
   submission.certNr=document.getElementById("CINField").value

   alert("submited");
  console.log(submission)
  
  
  
  }
  function handleChangeImg(event)
  {
   state.videoPath=event.target.value

   var fReader = new FileReader();
    var vinput=event.target

   fReader.readAsDataURL(vinput.files[0]);

   fReader.onloadend = function(event){
      let video=document.getElementById("id_image")
       video.src = event.target.result;
      
   }
   var fReader2 = new FileReader();
   fReader2.readAsText(vinput.files[0])
   fReader2.onloadend=function(event)
   {
     submission.certImg=event.target.result
   }




  }

  function handleChangeVideo(event)
  {


    var tmppath = URL.createObjectURL(event.target.files[0]);
      alert(tmppath )


    state.imgPath=event.target.files[0]

    var fReader = new FileReader();
     var vinput=event.target
 
    fReader.readAsDataURL(vinput.files[0]);
    fReader.onloadend = function(event){
       let video=document.getElementById("videoid")
        video.src = event.target.result;
    }
    var fReader2 = new FileReader();
    fReader2.readAsText(vinput.files[0])
    fReader2.onloadend=function(event)
    {
      submission.video=event.target.result
    }
 
  
  }


 return (<div className="AddTutorials" data-testid="AddTutorials">
  <h1 >Add a tutorial</h1>

 
 < div id="main">
    
<div id="left">
<FormGroup id='search_Bar1'>
           <Label for='nameField'> Name </Label>
          <div id="active_search">
              <input name='nameField' id='nameField' placeholder="Tutorial Name"
                 
                  required />


             </div>
       </FormGroup>


       <FormGroup id='filter_Bar1'>
           <Label for='durField'>Duration</Label>
            <br></br>
              <input  name='durField' id='durField' placeholder="Estimated duration"
             />
       </FormGroup>

            

       <FormGroup id='filter_Bar3'>
           <Label for='dateField'>Include Video</Label>
            <br></br>
            <video controls id="videoid" style={{width:"200px",height:"200px"}}></video>
            <br></br>
            <input type="file" accept="video/*"  onChange={handleChangeVideo} />
          
           

            
       </FormGroup>

       
       <FormGroup id='filter_Bar2'>
           <Label for='CINField'>Certificate ID Number</Label>
              <br></br>
        
              <input  name='CINField' id='CINField' placeholder="First aid ID number" />
           
              

           
       </FormGroup>

       <FormGroup id='filter_Bar3'>
           <Label for='dateField'>Upload a photo of your ID card</Label>
            <br></br>
            <input type="file" accept="image/*" onChange={handleChangeImg} />
            <br></br>
            <img  id="id_image" style={{width:"300px",height:"200px"}} ></img>

            
       </FormGroup>
         <Button style={{background:"#CE626D"}} className="button" id="submit" onClick={handleSubmit}>Upload tutorial</Button>
         </div>


    <div id="right2">
    <h2>Steps</h2>
    <h2>Step 1</h2>
    <p>Complete text fields</p>
    <h2>Step 2</h2>
    <p>Upload tutorial's video<br></br> Upload Certificate</p>
    <h2>Step 3</h2>
    <p>Press upload Tutorial button </p>
    </div>




  </div>
  </div>

  );

};

AddTutorials.defaultProps = {};

export default AddTutorials;
