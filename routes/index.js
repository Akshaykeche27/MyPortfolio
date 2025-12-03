
const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');
const Certificate = require('../models/Certificate');
const Project = require('../models/Project');
const { uploadProjectImage } = require("../cloudconfig");
const { uploadCertificateImage } = require("../cloudconfig");
const { uploadSkillImage } = require("../cloudconfig");

router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: 1 }).limit(12);
    const certs = await Certificate.find().sort({ createdAt: -1 }).limit(12);
    const projects = await Project.find().sort({ createdAt: -1 }).limit(12);
    res.render('index', { skills, certs, projects, name: 'Bhavesh Keche',  });
  } catch(err) {
    console.error(err);
    res.render('index', { skills: [], certs: [], projects: [], name: 'Bhavesh Keche'});
  }
});

router.get('/projects/new',async(req,res)=>{
       res.render('projects/new');
})



router.post("/projects", uploadProjectImage.single("thumbnail"), async (req, res) => {
  const project = new Project({
    title: req.body.title,
    description: req.body.description,
    liveUrl: req.body.liveUrl,
    githubUrl: req.body.githubUrl,
    thumbnail: req.file.path   // Cloudinary image URL
  });
  await project.save();
  res.redirect('/');
});


router.get('/skill/new',async(req,res)=>{
res.render('skills/new');
})



router.post("/skills", uploadSkillImage.single("icon"), async (req, res) => {
  const skill = new Skill({
    name: req.body.name,
    iconClass: req.file.path,
    level: req.body.level
  });
  await skill.save();
  res.redirect('/');
});


router.get('/certificates/new',async(req,res)=>{
       res.render('certificates/new');
})



router.post("/certificates", uploadCertificateImage.single("thumbnail"), async (req, res) => {
 console.log(req.file)
  const certificate = new Certificate({
    title: req.body.title,
    filePath: req.file.path,
    thumbnail: req.file.path,
    issuedBy: req.body.issuedBy,
  });
  await certificate.save();
  res.redirect('/');
});


module.exports = router;