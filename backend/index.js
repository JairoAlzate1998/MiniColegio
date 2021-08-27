const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const Student = require("./routers/student");
const Teacher = require("./routers/teacher");
const Subject = require("./routers/subject");
const Course = require("./routers/course");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/student", Student);
app.use("/api/teacher", Teacher);
app.use("/api/subject", Subject);
app.use("/api/course", Course);

app.listen(process.env.PORT, () =>
    console.log("Backend server running on port: ", process.env.PORT)
);

dbConnection();