const Course = require("../models/course");

const registerCourse = async (req, res) => {
  if (
    !req.body.code ||
    !req.body.name ||
    !req.body.numberStudents ||
    !req.body.classroom
  )
    return res.status(400).send("Process failed: Incomplete Data");

  const existing = await Course.findOne({ code: req.body.code });
  if (existing) return res.status(400).send("Subject already exist");

  const course = new Course({
    code: req.body.code,
    name: req.body.name,
    numberStudents: req.body.numberStudents,
    classroom: req.body.classroom,
  });

  const result = await course.save();
  if (!result) return res.status(400).send("Error to register course");
  return res.status(200).send({ result });
};

module.exports = { registerCourse };
