const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Storage for Project images
const projectStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "portfolio_projects",
    allowedFormats: ["jpg", "png", "jpeg"]
  },
});

// Storage for Certificate images
const certificateStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "portfolio_certificates",
    allowedFormats: ["jpg", "png", "jpeg", "pdf"]
  },
});

// Storage for Skills icons
const skillStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "portfolio_skills",
    allowedFormats: ["jpg", "png", "jpeg"]
  },
});

const uploadProjectImage = multer({ storage: projectStorage });
const uploadCertificateImage = multer({ storage: certificateStorage });
const uploadSkillImage = multer({ storage: skillStorage });

module.exports = {
  cloudinary,
  uploadProjectImage,
  uploadCertificateImage,
  uploadSkillImage
};