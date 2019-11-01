import React from "react";
import './style.css';
import SearchButton from '../SearchButton'

function Search(props) {
  return (
    <div className='wrapper'>
        <h3>Book Search</h3>
        <input placeholder='Search for books by name or by author' {...props}></input>
        <SearchButton />
    </div>
  );
}

export default Search;
