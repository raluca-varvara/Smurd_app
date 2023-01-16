import React, { useState} from 'react';
import { Navigate,useNavigate } from 'react-router-dom';
import img1 from '../common/images/ids/img2.jpg'
import img2 from '../common/images/ids/img7.jpg'
import  img3 from '../common/images/ids/img9.jpg'
import img4 from '../common/images/ids/img8.jpg'


import certificate from '../common/images/ids/cert.jpg'

import PropTypes from 'prop-types';

import './VolunteerAplications.css';
import {Button, Container, Jumbotron} from 'reactstrap';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  UncontrolledDropdown,
  Dropdown
} from 'reactstrap';
import { reduceHooks } from 'react-table';

let applications=[{
  name:"Cartoon Network",
  gender:"Male",
  dateOfNirth:"1.10.1992",
  country:"USA",
  city:"Atlanta,Georgia",
  CID:"1",
  identityCard:img1,
  FAidCert: certificate,
  link:"https://www.cartoonnetwork.ro/"

},
{
  name:"Disney Channel",
  gender:"Girl",
  dateOfNirth:"13.4.1983",
  country:"USA",
  city:"Burbank,California",
  CID:"3",
  identityCard:img3,
  FAidCert: certificate,
  link:"https://disneynow.com/all-shows/disney-channel"
},
{
  name:"Minimax",
  gender:"Girl",
  dateOfNirth:"1.10.1992",
  country:"Hungary",
  city:"Budapest",
  CID:"2",
  identityCard:img2,
  FAidCert: certificate,
  link:"https://www.minimaxro.tv/"
},
{
  name:"Facebook",
  gender:"Man",
  dateOfNirth:"2.02.2004",
  country:"USA",
  city:"MenloPark,California",
  CID:"4",
  identityCard:img4,
  FAidCert: certificate,
  link:"https://www.facebook.com/"
},
]





function VolunteerAplications() {


 const[currentAplications,setCurrentAplications]=useState(applications)
 const[toggleClicked,setToggleClicked]=useState(false)
         
 
   const navigate = useNavigate();





  return (<div className="VolunteerAplications" data-testid="VolunteerAplications">

    <Dropdown  toggle= {()=>
                    
                    { if(toggleClicked==false)
                     {
                       var elm= document.getElementById("menuD")
                          elm.style.display="block"
                        
                 
                        setToggleClicked(true)
                     }else
                     {
                 
                       var elm= document.getElementById("menuD")
                       elm.style.display="none"
                       setToggleClicked(false)
                 
                     }
                   }
                   
                   
                   } >
                    <DropdownToggle style={{ background:"maroon",color:"white",width:"500px", height:"50px" ,textAlign:'center'} }  
                     >
                       Check Volunteer Aplications
                    </DropdownToggle>
                    <DropdownMenu style={{ background:"maroon",color:"black",display:"none"}}    id="menuD"  >

                  { currentAplications.map( app =>
                              <> 
                          <DropdownItem  style={{color:"white" ,background:"maroon"  }}    
                          onClick={()=>{ 
                            navigate('/verification', {state:app})
                            }}>
                           {app.name}
                              
                           </DropdownItem>
                           <br></br>
                           </> 

                  )}
                

                    </DropdownMenu>
                </Dropdown>

  </div>)
}

VolunteerAplications.propTypes = {};

VolunteerAplications.defaultProps = {};

export default VolunteerAplications;
