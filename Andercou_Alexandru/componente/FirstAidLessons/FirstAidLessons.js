import React,{useState} from 'react';
import ReactDOM from "react-dom";

import PropTypes from 'prop-types';
import './FirstAidLessons.css';
import {Button,Image, Container, Jumbotron} from 'reactstrap';
import {Col, Row} from "reactstrap";
import { FormGroup, Input, Label} from 'reactstrap';
import { useNavigate } from "react-router-dom";
import searchicon from "../commons/images/search.png"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import FilterBox from '../FilterBox/FilterBox';
import LessonImage from '../LessonImage/LessonImage';
import iconK from "../commons/images/kids.jpg"
import iconA from "../commons/images/first-aid-kit.jpg"
import iconB from "../commons/images/heimlich.jpg"
import iconC from "../commons/images/red-cross.png"
import iconD from "../commons/images/respiratoriu.jpg"





const FirstAidLessons=()=>
{

  const[filters,setFilters]=useState([])
  const[toBeDeleted,setToBeDeleted]=useState("")
  const[images,setImages]=useState([])

  let filter=[]

for(let filt of filters)
if(filter.find(elm=>filt.props.content==elm.props.content)==null)
  filter.push(filt)
  else
  setFilters(filter)

if(toBeDeleted!="")
{
  var elm=filter.find(f=>f.props.content==toBeDeleted)
  console.log("elemeent",elm)


  if(elm!=null)
  {

    var myIndex = filter.indexOf(elm);
    filter.splice(myIndex,1)
    setFilters(filter)
  }
  setToBeDeleted("")

}


  console.log("Filter:",filter)
 
  function onDeleteFilter(content)
  {
  setToBeDeleted(content)
    

  }

  function resetFilters()
  {
    filter=[]
    setFilters([])
  }




function handleSearch()
{
  console.log("searches")
  alert("searched")

}
 

  function handleSubmit()
  {


    console.log("pressed")
    
  var valueI= document.getElementById("cityField").value
  if(valueI!="")
  {
    
    filter.push(<FilterBox content={valueI} onDelet={onDeleteFilter}/>)

  }

  

  valueI= document.getElementById("hospitalField").value
  if(valueI!="")
  {
    filter.push(<FilterBox content={valueI} onDelet={onDeleteFilter}/>)
  }


  valueI= document.getElementById("dateField").value
  if(valueI!="")
  {
    filter.push(<FilterBox content={valueI} onDelet={onDeleteFilter}/>)
  }

  valueI= document.getElementById("searchField").value
 if(valueI!="")
{
  filter.push(<FilterBox content={valueI} onDelet={onDeleteFilter}/>)

}
 setFilters(filter)



  }
  
  



  return(<div className="FirstAidLessons">
    <h1>First Aid Lessons</h1>


   <div id="main">

    <div id="left">
      <FormGroup id='search_Bar1'>
        <Label for='searchField'> Search </Label>
        <div id="active_search">
          <input name='searchField' id='searchField' placeholder="Search by course name"

            required />

          <Button className="button" style={{ background: "#CE626D" }} onClick={handleSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />


          </Button>

        </div>
      </FormGroup>

      <div id="applied">
        <div id="applied-head">
        <p>Filter({filters.length})</p>
        <p id="cancel" onClick={resetFilters}>Cancel</p>
        </div>
      
        <div id="applied-filters">
          {filters}
        </div>
      </div>

      <FormGroup id='filter_Bar1'>
        <Label for='searchField'>City</Label>
        <br></br>
        <input list='cities' name='cityField' id='cityField' placeholder="Select city" />
        <datalist id="cities">
          <option value="Cluj Napoca"> </option>
          <option value="Bucuresti"> </option>
          <option value="Timisoara"> </option>
        </datalist>




      </FormGroup><FormGroup id='filter_Bar2'>
        <Label for='hospitalField'>Select Hospital</Label>
        <br></br>

        <input list='hospitals' name='hospitalField' id='hospitalField' placeholder="Select hospital" />
        <datalist id="hospitals">
          <option value="Central Hospital"> </option>
          <option value="Spital Clinic C.F. Cluj"> </option>
          <option value="Royal Hospital Biciresti"> </option>
        </datalist>




      </FormGroup><FormGroup id='filter_Bar3'>
        <Label for='dateField'>Select Date</Label>
        <br></br>
        <input type="date" name='dateField' id='dateField' placeholder="Select date" />



      </FormGroup><Button style={{ background: "#CE626D" }} className="button" id="submit" onClick={handleSubmit}>Show courses</Button>

  </div>
  <div id="right">

   <LessonImage source_img={iconK} title="Tehnici de oprire a sangerarii" ranking='5.0' date="28.12.2022"/>
   <LessonImage source_img={iconA} title="Tehnici de oprire a sangerarii 2" ranking='4.8' date="28.12.2022"/>
   <LessonImage source_img={iconB} title="Tehnici de oprire a sangerarii 3" ranking='5.0' date="28.12.2022"/>
   <LessonImage source_img={iconC} title="Tehnici de oprire a sangerarii 4" ranking='5.0' date="28.12.2022"/>
   <LessonImage source_img="https://media.gettyimages.com/id/922952142/photo/romania-women-day-package.jpg?s=2048x2048&w=gi&k=20&c=LRjNdQe5-TJlxSvBUBw6FEP33wrUaHmLhakj9_o_Lf8="
    title="Tehnici de oprire a sangerarii 5" ranking='5.0' date="28.12.2022"/>
    {images}
    </div>
    </div>
    </div>
    );


}

export default FirstAidLessons;
