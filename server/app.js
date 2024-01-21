// app.js
const express = require('express');
const multer = require('multer');
const cors = require('cors')
const path = require('path');

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, 'client/build')));

// TODO: Configure CORS appropriately to only allowlist the client.
app.use(cors())


let capturedLocations = [
  { location: {id: 1, name: 'Wreck Beach', lat: 49.2622, lng: -123.2615},
    image: "",
    garbageType: ["Sharp"]
  },

  { location: {id: 1, name: 'Spanish Banks', lat: 49.2765, lng: -123.2133},
    image: "",
    garbageType: ["Glass"]
  }];

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/tmp');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.get('/locations', (req, res) => {
  
  res.json(capturedLocations.map((item) => item.location));
});

app.post('/upload', upload.single('image'), (req, res) => {
  if (req.file) {
    res.send('File uploaded!');
  } else {
    res.status(400).send('No file uploaded.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  // TODO: Create folder to save files
});
