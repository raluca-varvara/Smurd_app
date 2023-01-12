import React ,{ useState }from 'react'
import DatePicker from 'react-datepicker';
import "./customer_suport.css"

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFax, faPhone, faMailBulk, faLocation} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram,faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

function CustomerSupport(props){

    return(
        <div className='customerSupWrapper'>
            <div className = "ourStory">
                <h2 className='contactUsTitle'>Contact Us</h2>
                <div className = "contactUsDescr">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac viverra ipsum. Fusce mollis, nunc id vestibulum tempus, ipsum nisi varius odio, at viverra nisi massa eget augue. Suspendisse commodo leo eget leo rutrum, sit amet tempor metus dignissim. Vivamus vel odio leo. Quisque arcu nisi, dapibus semper varius at, faucibus et elit. Integer aliquam eros et interdum viverra. Aliquam erat volutpat. Suspendisse luctus eget velit at pellentesque. Maecenas lacinia magna enim, nec accumsan neque fringilla id.
                    <br></br>
                    <br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac viverra ipsum. Fusce mollis, nunc id vestibulum tempus, ipsum nisi varius odio, at viverra nisi massa eget augue. Suspendisse commodo leo eget leo rutrum, sit amet tempor metus dignissim. Vivamus vel odio leo. Quisque arcu nisi, dapibus semper varius at, faucibus et elit. Integer aliquam eros et interdum viverra. Aliquam erat volutpat. Suspendisse luctus eget velit at pellentesque. Maecenas lacinia magna enim, nec accumsan neque fringilla id.
                </div>
            </div>
            <div className='contactIds'>
                <div className="contactTextTitle">Contact us on:</div>
                <div className='contactRow'>
                    <FontAwesomeIcon icon={faPhone} className="contactIcon"/>
                    <div className="contactText"><span>Phone: </span> +40724156789 </div>
                </div>
                <div className='contactRow'>
                    <FontAwesomeIcon icon={faMailBulk} className="contactIcon"/>
                    <div className="contactText"><span>Mail:   </span>   helpme@contact.com </div>
                </div>
                <div className='contactRow'>
                    <FontAwesomeIcon icon={faFax} className="contactIcon"/>
                    <div className="contactText"><span>Fax: </span> 111-222-333 </div>
                </div>
                

                <div className="contactTextTitle">Or on our social media accounts:</div>
                <div className='contactRow'>
                    <FontAwesomeIcon icon={faInstagram} className="contactIcon"/>
                    <div className="contactText"> instagram.com/helpme </div>
                </div>
                <div className='contactRow'>
                    <FontAwesomeIcon icon={faFacebook} className="contactIcon"/>
                    <div className="contactText"> facebook.com/helpme </div>
                </div>
                <div className='contactRow'>
                    <FontAwesomeIcon icon={faTwitter} className="contactIcon"/>
                    <div className="contactText">twitter.com/helpme </div>
                </div>
                <div className='contactRow'>
                    <FontAwesomeIcon icon={faLinkedin} className="contactIcon"/>
                    <div className="contactText"> linkedin.com/helpme</div>
                </div>
                 
            </div>
        </div>
        
    );

}

export default CustomerSupport;