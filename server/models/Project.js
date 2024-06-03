// // models/Project.js
// const mongoose = require('mongoose');

// const projectSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
// });

// const Project = mongoose.model('Project', projectSchema);

// module.exports = Project;


// models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true },
  media: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }]
});

module.exports = mongoose.model('Project', projectSchema);
