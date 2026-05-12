const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  businessName: String,
  category: String,
  services: String,
  audience: String,
  tone: String,
  hero: String,
  about: String,
  servicesSection: String,
  cta: String,
  image: String
});

module.exports = mongoose.model("Project", projectSchema);