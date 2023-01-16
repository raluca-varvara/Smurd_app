
import PropTypes from 'prop-types';
import './MockUpApplicationVerification.css';
import React , { useRef, useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom'
import {Button, Container, Jumbotron} from 'reactstrap';
import { FormGroup, Input, Label} from 'reactstrap';


function MockUpApplicationVerification (props) {
 
  


  const location = useLocation();
  function  handleSubmit()
  {


   alert("submited");
  
  
  
  

  }

  function  handleCancel()
  {


   alert("canceled");
  
  
  
  
  }

props=location.state  
console.log("location",location.state)




const[aState,setAState]=useState(props)
console.log("state",aState)

  console.log("props",props)
  if(props.gender=="Male"){
  return(<div className="MockUpApplicationVerification" data-testid="MockUpApplicationVerification">
  <h1> Validation first aid certificate </h1>
  <hr></hr>
    < div id="main">
   
    <div id="left">
    <FormGroup id='data_name'>
               <Label for='nameField'> Name </Label>
              <div id="active_search">
                  <input name='nameField' id='nameField' value={props.name}
                     readOnly="readonly"
                      required />
    
    
                 </div>
           </FormGroup>
    
    
           <FormGroup id='filter_Bar1'>
           
          
               <Label for='male'>Male</Label>
                  <input type="radio" name='group' id='male'  checked="checked"  readOnly="readonly"
                 />
               <Label for='female'>Female</Label>
                  <input type="radio" name='group' id='female'  readOnly="readonly"
                 />
             

            
           </FormGroup>
    
                
    
           <FormGroup id='filter_Bar3'>
               <Label for='dateField'>Date of birth</Label>
                <br></br>
                <input  readOnly="readonly"  value={props.dateOfNirth}/>
              
               
    
                
           </FormGroup>
     
           <FormGroup id='filter_Bar2'>
               <Label for='CountryField'>Country</Label>
                  <br></br>
            
                  <input  name='CountryField' id='CountryField' value={props.country} readOnly="readonly"/>

                  </FormGroup>
           <FormGroup id='filter_Bar2'>
               <Label for='CityField'>City</Label>
                  <br></br>
            
                  <input  name='CityField' id='CityField 'value={props.city} readOnly="readonly" />
           
                  </FormGroup>
           <FormGroup id='filter_Bar2'>
               <Label for='CINField'>Certificate ID Number</Label>
                  <br></br>
            
                  <input  name='CINField' id='CINField' value={props.CID} readOnly="readonly"/>
               
                  
    
               
           </FormGroup>
    
                
       
             </div>
    
    
        <div id="right2">
        <Label for='id_card'> identity Card</Label>
        <br></br>
        <img id="id_card" src={aState.identityCard} style={{width:"300px",height:"180px"}}></img>
        <br></br>
        <Label for='certificate'> First Aid Certificated</Label>
        <br></br>
        <img id="certificate"  src={aState.FAidCert}  style={{width:"200px",height:"250px"}}></img>


        </div>
    
      </div>


<div id="buttons_div2">
<Button style={{background:"#CE626D"}} className="button" id="submit" onClick={handleSubmit}>Accept</Button>
<Button style={{background:"#CE626D"}} className="button" id="submit" onClick={handleSubmit}>Decline</Button>
</div>

  </div>

)}else
{
  return(<div className="MockUpApplicationVerification" data-testid="MockUpApplicationVerification">
   <h1> Validation first aid certificate </h1>
   <hr></hr>
  < div id="main">
  
  <div id="left">
  <FormGroup id='data_name'>
             <Label for='nameField'> Name </Label>
            <div id="active_search">
                <input name='nameField' id='nameField' value={aState.name}
                   readOnly="readonly"
                    required />
  
  
               </div>
         </FormGroup>
  
  
         <FormGroup id='filter_Bar1'>
         
        
             <Label for='male'>Male</Label>
                <input type="radio" name='group' id='male'   readOnly="readonly"
               />
             <Label for='female'>Female</Label>
                <input type="radio" name='group' id='female' checked="checked"  readOnly="readonly"
               />
           

          
         </FormGroup>
  
              
  
         <FormGroup id='filter_Bar3'>
             <Label for='dateField'>Date of birth</Label>
              <br></br>
              <input  readOnly="readonly"  value={aState.dateOfNirth}/>
            
             
  
              
         </FormGroup>
   
         <FormGroup id='filter_Bar2'>
             <Label for='CountryField'>Country</Label>
                <br></br>
          
                <input  name='CountryField' id='CountryField' value={aState.country} readOnly="readonly"/>

                </FormGroup>
         <FormGroup id='filter_Bar2'>
             <Label for='CityField'>City</Label>
                <br></br>
          
                <input  name='CityField' id='CityField 'value={aState.city} readOnly="readonly" />
         
                </FormGroup>
         <FormGroup id='filter_Bar2'>
             <Label for='CINField'>Certificate ID Number</Label>
                <br></br>
          
                <input  name='CINField' id='CINField' value={aState.CID} readOnly="readonly"/>
             
                
  
             
         </FormGroup>
  
              
     
           </div>
  
  
      <div id="right2">
      <Label for='id_card'> identity Card</Label>
      <br></br>
      <img id="id_card" src={aState.identityCard}  style={{width:"300px",height:"180px"}}></img>
      <br></br>
      <Label for='certificate'> First Aid Certificate</Label>
      <br></br>
      <img id="certificate" src={aState.FAidCert}  style={{width:"200px",height:"250x"}}></img>


      </div>
  
    </div>

<br></br>
<div id="buttons_div2">
  
<Button style={{background:"#CE626D"}} className="button" id="submit" onClick={handleSubmit}>Accept</Button>


<Button style={{background:"#CE626D"}} className="button" id="resubmit" onClick={handleCancel}>Decline</Button>

</div>

</div>
  )

}}

MockUpApplicationVerification.propTypes = {};

MockUpApplicationVerification.defaultProps = {};

export default MockUpApplicationVerification;
