const express = require('express');
const Photo = require('./models/Photo');
const router = express.Router();

router.post('/photos', async (req, res) => {
  const { description, photoUrl } = req.body;
  const newPhoto = new Photo({ description, photoUrl });
  await newPhoto.save();
  res.status(201).send(newPhoto);
});

router.get('/photos', async (req, res) => {
  const photos = await Photo.find();
  res.send(photos);
});

module.exports = router;
