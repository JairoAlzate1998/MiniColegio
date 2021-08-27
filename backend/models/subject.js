const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  code: Number,
  name: String,
  hours: Number,
  branch: String,
});

const subject = mongoose.model("subject", subjectSchema);
module.exports = subject;
