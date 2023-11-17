import React from 'react'
import './Custom-styling/CheckBox.css';


const CheckBox=() =>{
  return (
    <>
 
<div className="checkbox-container">
        <input type="checkbox" id="myCheckbox"/> 
        <label   htmlFor="" class="checkbox-label"></label> 
    </div>
   
    </>
  );
};
export default CheckBox;
