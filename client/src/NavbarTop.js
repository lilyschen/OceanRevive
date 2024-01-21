// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarTop.css'; // Import the CSS file


const NavbarTop = () => {
    return (
      <nav className="navbarTop">
        <ul className="nav-linksTop">
          <li>
            <Link to="/">Back</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    );
  };

export default NavbarTop;
