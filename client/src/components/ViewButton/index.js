import React from "react";
import './style.css';

function ViewButton(props) {
  return (
    <span className='viewButton' href='/' id={props.link}>
        View
    </span>
  );
}

export default ViewButton;