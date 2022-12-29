import React from 'react';
import PropTypes from 'prop-types';
import './LessonImage.css';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import   {firstAidKit}   from '../commons/images/first-aid-kit.jpg'
import   {heimlich}   from "../commons/images/heimlich.jpg"
import { Redirect } from 'react-router-dom';




function LessonImage(props={source_img:"",title:"Lesson",date:"28.12.2022",time:"21:07",ranking:"5.0" ,linkToLesson:"2"})
{

function doClick()
{

  console.log("cliked on image",props.source_img);
 var  path="/lesson/"+ props.linkToLesson 
  return <Redirect to= {path}/>

}

  return(<div className="LessonImage" >
  

<a onClick={doClick}>

<div  id="header">
  <div id="rankings">
<FontAwesomeIcon icon={faStar}>

</FontAwesomeIcon>
<p id="ranking">{props.ranking}</p>
</div>
</div>

<img src={props.source_img} style={{width: 200, height: 200, borderRadius: 200/2}} />




<p id="lesson_title">{props.title}</p>
<p id="date">{props.date}</p>
<p id="time">{props.time}</p>
</a>
  </div>);
}



LessonImage.propTypes = {};

LessonImage.defaultProps = {};

export default LessonImage;
