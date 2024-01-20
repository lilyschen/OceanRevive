// app.js
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, 'client/build')));

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
