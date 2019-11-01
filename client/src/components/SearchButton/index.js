import React from "react";
import './style.css';

function SearchButton(props) {
  return (
    <span className='searchButton' {...props}>
        Search
    </span>
  );
}

export default SearchButton;
