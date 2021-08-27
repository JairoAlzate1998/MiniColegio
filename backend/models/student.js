const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  birthDate: Date,
  courseId: { type: mongoose.Schema.ObjectId, ref: "course" },
});

studentSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      iat: moment().unix(),
    },
    process.env.SECRET_KEY_JWT
  );
};

const student = mongoose.model("student", studentSchema);
module.exports = student;
