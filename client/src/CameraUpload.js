// src/CameraUpload.js
import React, { useState, useCallback } from 'react';
import Webcam from 'react-webcam';

const CameraUpload = () => {
  const [image, setImage] = useState(null);
  const webcamRef = React.useRef(null);

  const handleCapture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, []);

  const handleUpload = () => {
    if (image) {
      const formData = new FormData();
      const blob = dataURLtoBlob(image);
      formData.append('image', blob, 'captured-image.png');

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
