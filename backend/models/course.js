const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  code: Number,
  name: String,
  numberStudents: Number,
  classroom: String,
});

const course = mongoose.model("course", courseSchema);
module.exports = course;
