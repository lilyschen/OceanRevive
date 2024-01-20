// src/App.js
import React, { useState } from 'react';
import CameraUpload from './CameraUpload';
import MapScreen from './MapScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('camera');

  return (
    <div className="App">
      <nav>
        <ul>
          <li onClick={() => setCurrentScreen('camera')}>Camera Upload</li>
          <li onClick={() => setCurrentScreen('map')}>Map</li>
        </ul>
      </nav>
      {currentScreen === 'camera' && <CameraUpload setScreen={setCurrentScreen} />}
      {currentScreen === 'map' && <MapScreen setScreen={setCurrentScreen} />}
    </div>
  );
}

export default App;
