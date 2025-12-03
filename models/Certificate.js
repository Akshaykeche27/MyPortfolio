const mongoose = require('mongoose');
const CertificateSchema = new mongoose.Schema({
  title: String,
  filePath: String, // server path to uploaded file
  thumbnail: String,
  issuedBy: String,
  date: Date,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Certificate', CertificateSchema);