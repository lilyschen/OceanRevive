// app.js
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

IMG_FOLDER = "../client/public";

app.use(express.static(path.join(__dirname, 'client/build')));

// TODO: Configure CORS appropriately to only allowlist the client.
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));

let capturedLocations = [
  {
    location: { id: 1, name: 'Wreck Beach', lat: 49.2622, lng: -123.2615 },
    image: "wreck_beach.jpeg",
    garbageType: ["Sharp"]
  },

  {
    location: { id: 2, name: 'Spanish Banks', lat: 49.2765, lng: -123.2133 },
    image: "needlebeach.jpeg",
    garbageType: ["Needle"]
  }];

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, IMG_FOLDER);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.get('/locations', (req, res) => {

  res.json(capturedLocations.map((item) => item.location));
});

app.get('/location/:id', (req, res) => {
  const locationId = parseInt(req.params.id);

  const location = capturedLocations.find((loc) => {
    return loc.location.id == locationId;
  });
  if (location) {
    res.json(location);
  } else {
    res.status(404).json({ error: 'Location not found' });
  }
});

app.post('/upload', upload.single('image'), (req, res) => {
  if (req.file) {
    const parsedLocation = JSON.parse(req.body.location)
    id = capturedLocations.length + 1
    capturedLocations.push({
      image: req.file.filename,
      location: { id: id, name: "UBC", lat: parseFloat(parsedLocation.lat), lng: parseFloat(parsedLocation.lng) },
    });

    res.send('File uploaded!');
  } else {
    res.status(400).send('No file uploaded.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  if (!fs.existsSync(IMG_FOLDER)) {
    fs.mkdirSync(IMG_FOLDER);
  }
});
