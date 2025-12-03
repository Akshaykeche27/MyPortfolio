 const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  liveUrl: String,
  githubUrl: String,
  thumbnail: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Project', ProjectSchema);