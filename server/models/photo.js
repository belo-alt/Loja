const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
  description: String,
  photoUrl: String
});

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;
