import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
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
  UncontrolledDropdown
} from 'reactstrap';
import { reduceHooks } from 'react-table';

let applications=[{
  name:"Cartoon Network",
  gender:"Male",
  dateOfNirth:"1.10.1992",
  country:"USA",
  city:"Atlanta,Georgia",
  CID:"1",
  identityCard:"http://localhost:8080/img3.jpg",
  FAidCert:"http://localhost:8080/Validate first aid certificate.jpg",
  link:"https://www.cartoonnetwork.ro/"

},
{
  name:"Disney Channel",
  gender:"Girl",
  dateOfNirth:"13.4.1983",
  country:"USA",
  city:"Burbank,California",
  CID:"3",
  identityCard:"http://localhost:8080/img2.jpg",
  FAidCert:"http://localhost:8080/Validate first aid certificate.jpg",
  link:"https://disneynow.com/all-shows/disney-channel"
},
{
  name:"Minimax",
  gender:"Girl",
  dateOfNirth:"1.10.1992",
  country:"Hungary",
  city:"Budapest",
  CID:"2",
  identityCard:"http://localhost:8080/img7.jpg",
  FAidCert:"http://localhost:8080/Validate first aid certificate.jpg",
  link:"https://www.minimaxro.tv/"
},
{
  name:"Facebook",
  gender:"Man",
  dateOfNirth:"2.02.2004",
  country:"USA",
  city:"MenloPark,California",
  CID:"4",
  identityCard:"http://localhost:8080/img4.jpg",
  FAidCert:"http://localhost:8080/Validate first aid certificate.jpg",
  link:"https://www.facebook.com/"
},
]





function VolunteerAplications() {


 const[currentAplications,setCurrentAplications]=useState(applications)

 
   const[red,setRed]=useState("")




  return (<div className="VolunteerAplications" data-testid="VolunteerAplications">

    <UncontrolledDropdown>
                    <DropdownToggle style={{ background:"maroon",color:"white",width:"300px" ,textAlign:'center'} } nav caret>
                       Check Volunteer Aplications
                    </DropdownToggle>
                    <DropdownMenu style={{ background:"maroon",color:"white"}}>

                  { currentAplications.map( app =>

                          <DropdownItem>
                           <a style={{color:"white"}}  onClick={()=>{ setRed(<Redirect
                           to={{
                         pathname: '/verification',
                         state:app}} />)
                        }
                         }>

                           {app.name}
                           {red}
                              </a>


                              
                           </DropdownItem>


                  )}
                    

                    </DropdownMenu>
                </UncontrolledDropdown>

  </div>)
}

VolunteerAplications.propTypes = {};

VolunteerAplications.defaultProps = {};

export default VolunteerAplications;
