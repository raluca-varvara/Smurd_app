import React from 'react';
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

function VolunteerAplications() {
  return (<div className="VolunteerAplications" data-testid="VolunteerAplications">

    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle style={{ background:"maroon",color:"white",width:"300px" ,textAlign:'center'} } nav caret>
                       Check Volunteer Aplications
                    </DropdownToggle>
                    <DropdownMenu style={{ background:"maroon",color:"white"}}>

                        <DropdownItem>
                            <a href="https://www.cartoonnetwork.ro/">
                              Cartoon Network
                              </a>
                              
                        </DropdownItem>
                        <DropdownItem>
                            <a  href="https://disneynow.com/all-shows/disney-channel">
                                Disney Channel
                            </a>
                        </DropdownItem>
                        <DropdownItem>
                            <a href="https://www.minimaxro.tv/">
                             Minimax
                            </a>
                        </DropdownItem>

                    </DropdownMenu>
                </UncontrolledDropdown>

  </div>)
}

VolunteerAplications.propTypes = {};

VolunteerAplications.defaultProps = {};

export default VolunteerAplications;
