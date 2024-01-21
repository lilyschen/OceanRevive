// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CameraUpload from './CameraUpload';
import MapScreen from './MapScreen';
import PinDetails from './PinDetails';
import Navbar from './Navbar';
import { LoadScript } from '@react-google-maps/api';

function App() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDq_llB4_W81OycWElDWisRWwX7rSth-M4">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MapScreen />} />
          <Route path="/upload" element={<CameraUpload />} />
          <Route path="/pin-details/:pinId" element={<PinDetails />} />
        </Routes>
      </Router>
    </LoadScript>
  );
}

export default App;
