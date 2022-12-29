import React from 'react';
import PropTypes from 'prop-types';
import './FilterBox.css';
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function FilterBox(props={content:"Default",onDelet:()=>{}}) {




  function mydelete()
  {
   console.log("my deleting")
    {props.onDelet(props.content)}
  }


 return (<div className="FilterBox" data-testid="FilterBox">
   

    <p id="content">{props.content}</p>

 
   <FontAwesomeIcon icon={faXmark} onClick={mydelete}>

   </FontAwesomeIcon>

  </div>);
}

FilterBox.propTypes = {};

//FilterBox.defaultProps = {content:"Default",onDelete:()=>alert("deleting")};

export default FilterBox;
