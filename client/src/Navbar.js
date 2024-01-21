// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <div className="menu-icon">&#9776;
//             </div>
//             <ul className="nav-links">
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/upload">Camera Upload</Link>
//                 </li>
//                 {/* Add more navigation links as needed */}
//             </ul>
//         </nav>
//     );
// };

const Navbar = () => {
    return (
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/upload">Camera Upload</Link>
          </li>
          <li>
            <Link to="/image-details">View Image Details</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    );
  };

export default Navbar;
