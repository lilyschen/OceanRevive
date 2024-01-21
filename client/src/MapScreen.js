// src/MapScreen.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const MapScreen = ({ setScreen }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Fetch the list of locations from the server
    // TODO: Replace with appropriate constant
    fetch('http://localhost:3001/locations')
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((error) => console.error('Error fetching locations:', error));
  }, []);

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <div>
      <h2>Map</h2>
      <LoadScript googleMapsApiKey="">
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
          {locations.map((location) => (
            <MarkerF
              key={location.id}
              position={{ lat: location.lat, lng: location.lng }}
              title={location.name}
            />
          ))}
        </GoogleMap>
      </LoadScript>
      <button onClick={() => setScreen('camera')}>Go to Camera Upload</button>
    </div>
  );
};

export default MapScreen;
