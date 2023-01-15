import React,{useState} from 'react';
import ReactDOM from "react-dom";
import './FirstAidLessons.css';
import {Button,Image, Container, Jumbotron} from 'reactstrap';
import { FormGroup, Input, Label} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import FilterBox from '../FilterBox/FilterBox';
import LessonImage from '../LessonImage/LessonImage';
import iconK from "../common/images/kids.jpg"
import iconA from "../common/images/first-aid-kit.jpg"
import iconB from "../common/images/heimlich.jpg"
import iconC from "../common/images/red-cross.png"
import iconD from "../common/images/respiratoriu.jpg"


let courses=[{source_img:iconK ,title:"Tehnici de oprire a sangerarii",ranking:'5.0',date:"2023-03-08",time:"",city:"Cluj Napoca",hospital:"",telefon:"077448988900"},
{source_img:iconA,title:"Tehnici de oprire a sangerarii 2",ranking:'4.8',date:"2023-02-2",time:"",city:"Bucuresti",hospital:"",telefon:"077448988900"},
{source_img:iconB,title:"How to do heimnlich" ,ranking:'5.0',date:"2023-02-27",time:"",city:"Cluj Napoca",hospital:"",telefon:"077448988900"},
{source_img:iconC,title:"Tehnici de oprire a sangerarii 4" ,ranking:'5.0',date:"2023-02-27",time:"",city:"Timisoara",hospital:"",telefon:"077448988900"},
{source_img:"https://media.gettyimages.com/id/922952142/photo/romania-women-day-package.jpg?s=2048x2048&w=gi&k=20&c=LRjNdQe5-TJlxSvBUBw6FEP33wrUaHmLhakj9_o_Lf8=",
  title:"Tehnici de oprire a sangerarii 5" ,ranking:'5.0',date:"2023-01-19",time:"",city:"Bucuresti",hospital:"",telefon:"077448988900"}
];



const FirstAidLessons=()=>
{

  const[filters,setFilters]=useState([])
  const[toBeDeleted,setToBeDeleted]=useState("")
  const[images,setImages]=useState([])
  const[currentCourses,setCurrentCourses]=useState(courses)


  let filter=[]



for(let filt of filters)
if(filter.find(elm=>filt.value==elm.value)==null)
  filter.push(filt)
  else
  setFilters(filter)

if(toBeDeleted!="")
{
  var elm=filter.find(f=>f.value==toBeDeleted)
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


  
  function apply_filters()
  {
    console.log("courses",courses)

    var  new_list_courses=[]
    for(var c of courses)
    {
      let added=false
      if(filter.length>0){
    for (var f of filter)
    {
    
    
  if(f.type="city" && c.city==f.value && added==false)
  {
    added=true
    new_list_courses.push(c)

  }

  if(f.type="hospital" && c.hospital==f.value && added==false)
  {
    added=true
    new_list_courses.push(c)

  }
  if(f.type="date" && c.date==f.value && added==false)
  {
    added=true
    new_list_courses.push(c)

  }
  if(f.type="word" && c.title.includes(f.value,0) && added==false)
  {
    added=true
    new_list_courses.push(c)

  }
 


  }
}
  else{
 
    new_list_courses.push(c)
  }

  }
 
  setCurrentCourses(new_list_courses)
  }
 
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
  apply_filters()
  alert("searched")

}
 

  function handleSubmit()
  {


    console.log("pressed")
    
  var valueI= document.getElementById("cityField").value
  if(valueI!="")
  {
    
    filter.push({value:valueI,type:"city"})
 
  }

  

  valueI= document.getElementById("hospitalField").value
  if(valueI!="")
  {
    filter.push({value:valueI,type:"hospital"})
  }


  valueI= document.getElementById("dateField").value
  if(valueI!="")
  {
    filter.push({value:valueI,type:"date"})
  }

  valueI= document.getElementById("searchField").value
 if(valueI!="")
{
  filter.push({value:valueI,type:"word"})
}


 setFilters(filter)
 apply_filters()


  }
  
  



  return(<div className="FirstAidLessons">
    <h1>First Aid Lessons</h1>

    <hr></hr>
   <div id="main_fa">

    <div id="left_fa">
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
        {
         filters.map((img_src) => <FilterBox content={img_src.value} onDelet={onDeleteFilter}/>)}
        
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
  <div id="right_fa">


  {
   currentCourses.map((img_src) => <LessonImage source_img={img_src.source_img} title={img_src.title}
                                   ranking={img_src.ranking} date={img_src.date}  time={img_src.time}    
                                  city={img_src.city}   hospital={img_src.source_img} telefon={img_src.telefon}        />)}
    </div>
    </div>
    </div>
    );


}

export default FirstAidLessons;
