const Student = require("../models/student");
const bcrypt = require("bcrypt");

const registerStudent = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.password ||
    !req.body.birthDate ||
    !req.body.courseId
  )
    return res.status(400).send("Process failed: Incomplete Data");

  const existing = await Student.findOne({ email: req.body.email });
  if (existing) return res.status(400).send("Student already exist");

  const hash = await bcrypt.hash(req.body.password, 10);

  const student = new Student({
    name: req.body.name,
    email: req.body.email,
    password: hash,
    birthDate: req.body.birthDate,
    courseId: req.body.courseId,
  });

  const result = await student.save();
  if (!result) return res.status(400).send("Error to register student");
  return res.status(200).send({ result });
};

module.exports = { registerStudent };
