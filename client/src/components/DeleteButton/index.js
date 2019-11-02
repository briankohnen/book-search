import React from "react";
import './style.css';

function DeleteButton(props) {
  return (
    <span className='deleteButton' {...props}>
        Delete
    </span>
  );
}

export default DeleteButton;