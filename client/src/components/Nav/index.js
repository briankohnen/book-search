import React from "react";
import { Link } from "react-router-dom";
import './style.css';

function Nav() {
  return (
    <div className='navi'>
        <nav className="links">
        <a className="navLink" href="https://books.google.com/">
            GoogleBooks
        </a>
        <Link to='/' className='navLink'>
            Search
        </Link>
        <Link to='/saved' className='navLink'>
            Saved
        </Link>
        </nav>
    </div>
  );
}

export default Nav;
