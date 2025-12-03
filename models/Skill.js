const mongoose = require('mongoose');
const SkillSchema = new mongoose.Schema({
  name: String,
  iconClass: String, // e.g., "fa-brands fa-js"
  level: { type: String, default: 'Intermediate' },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Skill', SkillSchema);