// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CameraUpload from './CameraUpload';
import MapScreen from './MapScreen';
import PinDetails from './PinDetails';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MapScreen />} />
        <Route path="/upload" element={<CameraUpload />} />
        <Route path="/pin-details/:pinId" element={<PinDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
