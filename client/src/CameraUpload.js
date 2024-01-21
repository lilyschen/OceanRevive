// src/CameraUpload.js
import React, { useState, useCallback, useEffect } from 'react';
import Webcam from 'react-webcam';

const CameraUpload = () => {
  const [image, setImage] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const webcamRef = React.useRef(null);

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
  }, []);

  const handleCapture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, []);

  const handleUpload = () => {
    if (image) {
      const formData = new FormData();
      const blob = dataURLtoBlob(image);
      formData.append('image', blob, 'captured-image.png');
      formData.append('location', JSON.stringify(userLocation));

      // TODO: Replace with appropriate constant
      fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
          // Handle success or display a message to the user
        })
        .catch((error) => {
          console.error('Error uploading image:', error);
          // Handle error or display an error message to the user
        });
    }
  };

  const dataURLtoBlob = (dataURL) => {
    const arr = dataURL.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  };

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/png"
        width={640}
        height={480}
      />
      <button onClick={handleCapture}>Capture</button>
      {image && <img src={image} alt="Preview" />}
      {image && <button onClick={handleUpload}>Upload</button>}
    </div>
  );
};

export default CameraUpload;
