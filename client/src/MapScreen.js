// src/OtherScreen.js
import React from 'react';

const MapScreen = ({ setScreen }) => {
  return (
    <div>
      <h2>Map</h2>
      <p>This is Map</p>
      <button onClick={() => setScreen('camera')}>Go to Camera Upload</button>
    </div>
  );
};

export default MapScreen;
