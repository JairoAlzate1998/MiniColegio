const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const techerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  birthDate: Date,
  subjectId: { type: mongoose.Schema.ObjectId, ref: "subject" },
  codeProfessional: String,
});

techerSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      code: this.codeProfessional,
      iat: moment().unix(),
    },
    process.env.SECRET_KEY_JWT
  );
};

const teacher = mongoose.model("teacher", techerSchema);
module.exports = teacher;
