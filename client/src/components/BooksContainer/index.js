import React from "react";
import './style.css';

function BooksContainer(props) {
  return (
    <div className='booksContainer'>
        <h3>Results</h3>
        {props.children}
    </div>
  );
}

export default BooksContainer;
