import React from "react";
import './style.css';

function BooksContainer(props) {
  return (
    <div className='booksContainer'>
        <h3>{props.containerHead}</h3>
        {props.children}
    </div>
  );
}

export default BooksContainer;
