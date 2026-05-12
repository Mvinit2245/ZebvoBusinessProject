const express = require("express");
const Project = require("../models/Project");
const generateWebsite = require("../utils/generator");

const router = express.Router();

router.post("/generate", async (req, res) => {

  const generated = generateWebsite(req.body);

  const project = await Project.create({
    ...req.body,
    ...generated
  });

  res.json(project);
});

router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

router.put("/:id", async (req, res) => {
  const updated = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
});

module.exports = router;