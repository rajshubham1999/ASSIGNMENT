// models/Media.js
const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' }
});

module.exports = mongoose.model('Media', mediaSchema);
