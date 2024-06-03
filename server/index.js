
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const app = express();
// const port = 5000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Database configuration
// const dbConfig = require('./config/dbConfig');

// // Models
// const User = require('./models/User');
// const Project = require('./models/Project');
// const Media = require('./models/Media');

// // API Routes

// // Add or update user email
// app.post('/api/add-email', async (req, res) => {
//   const { email } = req.body;
//   let user = await User.findOne({ email });

//   if (!user) {
//     user = new User({ email });
//     await user.save();
//   }

//   res.status(201).send(user);
// });

// // Add a project to a user
// app.post('/api/add-projects', async (req, res) => {
//   const { email, name } = req.body;
//   const user = await User.findOne({ email });

//   if (!user) {
//     return res.status(404).send({ error: 'User not found' });
//   }

//   const project = new Project({ name, user: user._id });
//   await project.save();

//   user.projects.push(project);
//   await user.save();

//   res.status(201).send(project);
// });


// // GET endpoint to retrieve projects for a user
// app.get('/api/projects/:email', async (req, res) => {
//   const { email } = req.params;
//   const user = await User.findOne({ email }).populate('projects');

//   if (!user) {
//     return res.status(404).send({ error: 'User not found' });
//   }

//   res.json({ projects: user.projects });
// });


// // Add media to a project
// app.post('/api/add-media', async (req, res) => {
//   const { projectId, name, link } = req.body;
//   const project = await Project.findById(projectId);

//   if (!project) {
//     return res.status(404).send({ error: 'Project not found' });
//   }

//   const media = new Media({ name, link, project: project._id });
//   await media.save();

//   project.media.push(media);
//   await project.save();

//   res.status(201).send(media);
// });

// // Get all projects for a user
// app.get('/api/projects/:email', async (req, res) => {
//   const { email } = req.params;
//   const user = await User.findOne({ email }).populate({
//     path: 'projects',
//     populate: { path: 'media' }
//   });

//   if (!user) {
//     return res.status(404).send({ error: 'User not found' });
//   }

//   res.send(user.projects);
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database configuration
const dbConfig = require('./config/dbConfig');

// Models
const User = require('./models/User');
const Project = require('./models/Project');
const Media = require('./models/Media');

// Add or update user email
app.post('/api/add-email', async (req, res) => {
  const { email } = req.body;
  let user = await User.findOne({ email });

  if (!user) {
    user = new User({ email });
    await user.save();
  }

  res.status(201).send(user);
});

// Add a project to a user
app.post('/api/add-projects', async (req, res) => {
  const { email, name } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).send({ error: 'User not found' });
  }

  const project = new Project({ name, user: user._id });
  await project.save();

  user.projects.push(project);
  await user.save();

  res.status(201).send(project);
});

// Add media to a project
app.post('/api/add-media', async (req, res) => {
  const { projectId, name, link } = req.body;
  const project = await Project.findById(projectId);

  if (!project) {
    return res.status(404).send({ error: 'Project not found' });
  }

  const media = new Media({ name, link, project: project._id });
  await media.save();

  project.media.push(media);
  await project.save();

  res.status(201).send(media);
});

// GET endpoint to retrieve projects for a user
app.get('/api/projects/:email', async (req, res) => {
  const { email } = req.params;
  const user = await User.findOne({ email }).populate({
    path: 'projects',
    populate: { path: 'media' }
  });

  if (!user) {
    return res.status(404).send({ error: 'User not found' });
  }

  res.json({ projects: user.projects });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
