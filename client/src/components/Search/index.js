import React from "react";
import './style.css';
import SearchButton from '../SearchButton'

function Search(props) {
  return (
    <div className='wrapper'>
        <h3>Book Search</h3>
        <input placeholder='Search for books by name or by author' value={props.value}
        name={props.name} onChange={props.onChange}></input>
        <SearchButton onClick={props.onClick}/>
    </div>
  );
}

export default Search;
