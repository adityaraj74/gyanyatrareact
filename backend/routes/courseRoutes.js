const express = require("express");
const { enrollCourse, getEnrolledCourses, getCourses } = require("../controllers/courseController");

const router = express.Router();

router.post("/enroll", enrollCourse);
router.get("/enrolled/:userId", getEnrolledCourses);
router.get("/", getCourses); // Add this route

module.exports = router;