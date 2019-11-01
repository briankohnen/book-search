import React from "react";
import './style.css';

function Nav() {
  return (
    <div className='navi'>
        <nav className="links">
        <a className="navLink" href="https://books.google.com/">
            GoogleBooks
        </a>
        <a className='navLink' href='/'>
            Search
        </a>
        <a className='navLink' href='/'>
            Saved
        </a>
        </nav>
    </div>
  );
}

export default Nav;
