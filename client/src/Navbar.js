// src/components/Navbar.js
import React, { useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file
import { ReactComponent as HomeLogoActive } from './UI icon/home-active.svg';
import { ReactComponent as HomeLogo } from './UI icon/home.svg';
import { ReactComponent as DiscoveryLogoActive } from './UI icon/discovery-active.svg';
import { ReactComponent as DiscoveryLogo } from './UI icon/discovery.svg';
import { ReactComponent as ProfileLogoActive } from './UI icon/profile-active.svg';
import { ReactComponent as ProfileLogo } from './UI icon/profile.svg';
import { ReactComponent as CameraLogoActive } from './UI icon/camera-active.svg';
import { ReactComponent as CameraLogo } from './UI icon/camera.svg';


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
    const location = useLocation();
    const [activeIcon, setActiveIcon] = useState('home');

    useEffect(() => {
        // Extract the pathname from the location object
        const pathname = location.pathname;

        // Determine the active icon based on the current pathname
        if (pathname === '/') {
            setActiveIcon('home');
        } else if (pathname === '/discovery') {
            setActiveIcon('discovery');
        } else if (pathname === '/profile') {
            setActiveIcon('profile');
        } else if (pathname === '/upload') {
            setActiveIcon('upload');
        }
    }, [location.pathname]);

    return (
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/" class='home'>
            {activeIcon === 'home' ? <HomeLogoActive class='home'/> : <HomeLogo class='home'/>}
            <br/><label class='home'>Home</label></Link>
          </li>
          <li>
            <Link to="/discovery">{activeIcon === 'discovery' ? <DiscoveryLogoActive /> : <DiscoveryLogo />}
            <br/>Discovery</Link>
          </li>
          <li>
            <Link to="/upload">{activeIcon === 'upload' ? <CameraLogoActive /> : <CameraLogo />}
            <br/>Camera Upload</Link>
          </li>
          <li>
            <Link to="/profile" name='profile'>{activeIcon === 'profile' ? <ProfileLogoActive /> : <ProfileLogo />}
            <br/><label for='profile'>Profile</label></Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    );
  };

export default Navbar;
