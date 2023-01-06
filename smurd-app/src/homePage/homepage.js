import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./homepage.css"
import customer_support from "../common/images/home_page/customer_support.png"
import tests from "../common/images/home_page/tests.png"
import security from "../common/images/home_page/security.png"
import course from "../common/images/home_page/apply_for_course.png"
import heart_rate from "../common/images/home_page/heart_rate.png"
import heart_rate_hearth from "../common/images/home_page/heart_rate_with_small_heart.png"
import doctor from "../common/images/home_page/doctor.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockFour, faClipboard, faHeartPulse } from '@fortawesome/free-solid-svg-icons'
import Footer from '../footer/footer';
import Donations from '../donations/donations';
import { useNavigate } from "react-router-dom";



function HomePage() {
 let navigate = useNavigate(); 

    var role = localStorage.getItem("role");
    
  return (
    <div className="homepage">


            <div>
                <div className = "frontWrapper">
                    <div className = "frontColumn">
                        <h1>Your Health Comes <br></br>First</h1>
                        <img src={heart_rate} alt="heart rate"/>
                        <p className="descrText">
                            With Medicare you can be a hero. Became<br></br> a volunteer and contribute to safety or call<br></br> for a volunteer if someone needs help.
                        </p>
                        <button className="reportButton" onClick={() => navigate("/report")}>
                            Report an emergency
                        </button>
                    </div>
                    <div className = "frontColumn">
                        <img src={doctor} alt="doctor"/>
                    </div>
                    <div className = "frontColumn">
                        <img src={heart_rate_hearth} alt="heart rate"/>
                        <p className="quote">“A trusted assistance companion for your<br></br> health needs. ”</p>
                    </div>
                </div>
                <div className = "descriptionWrapper">
                    <div className="description">
                        <div className = "descriptionContainer">
                            <div className = "center_row">
                                <div className = "iconDiv">
                                    <FontAwesomeIcon icon={faClockFour}  />

                                </div>
                                <div className="center_column">
                                    <h3>24 hours services</h3>
                                    <p>lorem ipsum dolor sit amet,connector adicipafg</p>
                                </div>
                            </div>
                        </div>
                        <div className = "descriptionContainer">
                                <div className = "center_row">
                                    <div className = "iconDiv">
                                        <FontAwesomeIcon icon={faClipboard}  />

                                    </div>
                                    <div className="center_column">
                                        <h3>32 years of experience</h3>
                                        <p>SMURD a luat ființă la Târgu Mureș în 1991, iar din anul 2007 serviciul a fost extins la nivel național. </p>
                                    </div>
                                </div>
                        </div>
                        <div className = "descriptionContainer">
                            <div className = "center_row">
                                <div className = "iconDiv">
                                    <FontAwesomeIcon icon={faHeartPulse}  />

                                </div>
                                <div className="center_column">
                                    <h3>Volunteers all over the country</h3>
                                    <p>lorem ipsum dolor sit amet,connector adicipafg</p>

                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <p className = "textDescript">Your health requirements <br></br> are our first focus.</p>
                <div className = "controlls">
                    <button className = "control">
                        <div className = "center_row">
                            <img src={customer_support} alt="customer support" height="130" onClick={() => navigate("/customer")}/>
                        </div>
                        <div className = "center_row">
                            <p>Customer support</p>
                        </div>
                    </button>
                    <button className = "control">
                        <div className = "center_row">
                            <img src={tests} alt="Take a quiz" height="130"/>
                        </div>
                        <div className = "center_row">
                            <p>Take a quiz</p>
                        </div>        
                    </button>
                    <button className = "control">
                        <div className = "center_row">
                            <img src={course} alt="Apply for course" height="130"  onClick={() => navigate("/firstaidlessons")}/>
                        </div>
                        <div className = "center_row">
                            <p>Apply for course</p>
                        </div>      
                    </button>
                    <button className = "control">
                        <div className = "center_row">
                            <img src={security} alt="privacy and security" height="130" onClick={() => navigate("/security")}/>
                        </div>
                        <div className = "center_row">
                            <p>Privacy and security</p>
                        </div>
                    </button>
                </div>
            </div>
    <Donations/>
          <Footer/>
               
       
    </div>
  );
}

export default HomePage;