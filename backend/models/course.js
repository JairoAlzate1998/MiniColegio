const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  code: String,
  name: String,
  numberStudents: String,
  classroom: String,
});

const course = mongoose.model("course", courseSchema);
module.exports = course;
