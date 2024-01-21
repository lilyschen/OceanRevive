// src/MapScreen.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { GoogleMap, MarkerF } from '@react-google-maps/api';


const MapScreen = ({ setScreen }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }

    // Fetch the list of locations from the server
    // TODO: Replace with appropriate constant
    fetch('http://localhost:3001/locations')
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((error) => console.error('Error fetching locations:', error));
  }, []);

  const mapContainerStyle = {
    width: '100%',
    height: '100vh',
    
  };
  const mapUI = {
    disableDefaultUI: true,
    keyboardShortcuts: false
  };

  let navigate = useNavigate();
  const routeChange = (detailId) => {
    let path = `/pin-details/${detailId}`;
    navigate(path);
  }

  const center = userLocation || { lat: 49.2626161, lng: -123.2453741 };

  return (
    <GoogleMap options={mapUI} mapContainerStyle={mapContainerStyle} center={center} zoom={13} >
      
      {locations.map((location) => (
        <MarkerF
          key={location.id}
          position={{ lat: location.lat, lng: location.lng }}
          title={location.name}
          onClick={() => routeChange(location.id)}
        >
        </MarkerF>
      ))}
    </GoogleMap>
  );
};

export default MapScreen;
