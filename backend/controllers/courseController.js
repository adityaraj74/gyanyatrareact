const User = require("../models/User");

const Course = require("../models/Course");

// Enroll in a course

exports.enrollCourse = async (req, res) => {
    const { userId, courseName } = req.body;
    console.log("Enroll Request - userId:", userId, "courseName:", courseName); // Debug log
  
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      if (user.enrolledCourses.includes(courseName)) {
        return res.status(400).json({ message: "User is already enrolled in this course" });
      }
  
      user.enrolledCourses.push(courseName);
      await user.save();
  
      res.status(200).json({ message: "Course enrolled successfully", user });
    } catch (error) {
      console.error("Error enrolling in course:", error);
      res.status(500).json({ message: "Something went wrong" });
    }
  };
  
  // Fetch enrolled courses for a user
  exports.getEnrolledCourses = async (req, res) => {
    const { userId } = req.params;
    console.log("Fetch Enrolled Courses Request - userId:", userId); // Debug log
  
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({ enrolledCourses: user.enrolledCourses });
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
      res.status(500).json({ message: "Something went wrong" });
    }
  };

// Fetch enrolled courses for a user
exports.getEnrolledCourses = async (req, res) => {
    const { userId } = req.params;
    console.log("Fetch Enrolled Courses Request - userId:", userId); // Debug log
  
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({ enrolledCourses: user.enrolledCourses });
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
      res.status(500).json({ message: "Something went wrong" });
    }
  };
// Fetch all courses
exports.getCourses = async (req, res) => {
    try {
      const courses = await Course.find(); // Fetch all courses from the database
      console.log("Fetched Courses:", courses); // Debug log
      res.status(200).json(courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ message: "Something went wrong" });
    }
  };