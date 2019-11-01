import React from "react";
import './style.css';

function ViewButton(props) {
  return (
    <a {...props}>
      <span className='viewButton'>
          View
      </span>
    </a>
  );
}

export default ViewButton;