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

  faq: Array,

  testimonials: Array,

  contact: Object,

  seo: Object,

  cta: String,

  image: String

});

module.exports = mongoose.model(
  "Project",
  projectSchema
);