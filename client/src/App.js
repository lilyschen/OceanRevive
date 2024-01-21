// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CameraUpload from './CameraUpload';
import MapScreen from './MapScreen';
import PinDetails from './PinDetails';
import Navbar from './Navbar';
import NavbarTop from './NavbarTop';
import Profile from './Profile';
import AIconfirm from './AIconfirm';
import ManualInput from './ManualInput';
import { LoadScript } from '@react-google-maps/api';
import Home from './Home';


function App() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBoVsCkr0q-fzvg_xkLMO7BVM6bSOi1fzI">
      <Router>
        <NavbarTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<MapScreen />} />
          <Route path="/upload" element={<CameraUpload />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/AIconfirm" element={<AIconfirm />} />
          <Route path="/ManualInput" element={<ManualInput />} />
          <Route path="/pin-details/:pinId" element={<PinDetails />} />
        </Routes>
      </Router>
    </LoadScript>
  );
}

export default App;