const Teacher = require("../models/teacher");
const bcrypt = require("bcrypt");

const registerTeacher = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.password ||
    !req.body.birthDate ||
    !req.body.subjectId ||
    !req.body.codeProfessional
  )
    return res.status(400).send("Process failed: Incomplete Data");

  const existing = await Teacher.findOne({ email: req.body.email });
  if (existing) return res.status(400).send("Teacher already exist");

  const hash = await bcrypt.hash(req.body.password, 10);

  const teacher = new Teacher({
    name: req.body.name,
    email: req.body.email,
    password: hash,
    birthDate: req.body.birthDate,
    subjectId: req.body.subjectId,
    codeProfessional: req.body.codeProfessional,
  });

  const result = await teacher.save();
  if (!result) return res.status(400).send("Failed to register teacher");
  try {
    let jwtToken = teacher.generateJWT();
    res.status(200).send({ jwtToken });
  } catch (e) {
    return res.status(400).send("Token generation failed");
  }
};

module.exports = { registerTeacher };
