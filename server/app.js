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
  // Hardcoded list of locations with coordinates
  const locations = [
    { id: 1, name: 'Location A', lat: 49.261199779342405, lng: -123.24890381012028 },
    { id: 2, name: 'Location B', lat: 37.7831, lng: -122.4039 },
    // Add more locations as needed
  ];
  
  res.json(locations);
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
