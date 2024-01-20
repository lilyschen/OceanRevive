// src/MapScreen.js
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapScreen = ({ setScreen }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 37.7749, // Latitude for San Francisco, you can adjust this to your preferred location
    lng: -122.4194, // Longitude for San Francisco, you can adjust this to your preferred location
  };

  return (
    <div>
      <h2>Map</h2>
      <LoadScript googleMapsApiKey="">
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
          {/* Additional components or markers can be added here */}
        </GoogleMap>
      </LoadScript>
      <button onClick={() => setScreen('camera')}>Go to Camera Upload</button>
    </div>
  );
};

export default MapScreen;
