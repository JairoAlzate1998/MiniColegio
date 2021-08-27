const express = require("express");
const router = express.Router();
const SubjectController = require("../controllers/subject");

router.post("/registerSubject", SubjectController.registerSubject);

module.exports = router;