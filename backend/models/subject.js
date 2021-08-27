const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  code: String,
  name: String,
  hours: String,
  branch: String,
});

const subject = mongoose.model("subject", subjectSchema);
module.exports = subject;
