// src/components/Navbar.js
import React, { useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file
import { ReactComponent as HomeLogoActive } from './UI icon/home-active.svg';
import { ReactComponent as HomeLogo } from './UI icon/home.svg';
import { ReactComponent as DiscoverLogoActive } from './UI icon/discover-active.svg';
import { ReactComponent as DiscoverLogo } from './UI icon/discover.svg';
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
        } else if (pathname === '/discover') {
            setActiveIcon('discover');
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
            <Link to="/discover">{activeIcon === 'discover' ? <DiscoverLogoActive /> : <DiscoverLogo />}
            <br/>Discover</Link>
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
