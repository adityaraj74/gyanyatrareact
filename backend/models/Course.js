const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  detail: { type: String, required: true },
  price: { type: String, required: true },
  img: { type: String, required: true },
  duration: { type: String, required: true },
  batchTiming: { type: String, required: true },
  validity: { type: String, required: true },
  description: { type: String, required: true },
  youtubeLinks: [{ type: String }], 
});

module.exports = mongoose.model("Course", courseSchema);