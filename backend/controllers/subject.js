const Subject = require("../models/subject");

const registerSubject = async (req, res) => {
  if (!req.body.code || !req.body.name || !req.body.hours || !req.body.branch)
    return res.status(400).send("Process failed: Incomplete Data");

  const existing = await Subject.findOne({ code: req.body.code });
  if (existing) return res.status(400).send("The Subejct already exist");

  const subject = new Subject({
    code: req.body.code,
    name: req.body.name,
    hours: req.body.hours,
    branch: req.body.branch,
  });

  const result = await subject.save();
  if (!result) return res.status(400).send("Error to register subject");
  return res.status(200).send({ result });
};

module.exports = { registerSubject };
