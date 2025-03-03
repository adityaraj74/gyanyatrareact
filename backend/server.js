const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api", contactRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



const Course = require("./models/Course");

const seedCourses = async () => {
  try {
    await Course.deleteMany(); 
    const courses = [
      {
        name: "Advanced Java",
        detail: "This is the best course of Java Programming available in the market.",
        price: "₹999",
        img: "/images/java.png",
        duration: "3 months",
        batchTiming: "Mon-Fri, 6-8 PM",
        validity: "6 months",
        description: "A Java programming course is designed to teach students the fundamentals of programming using Java.",
        youtubeLinks: ["PIvOfcR77Q", "CyGodpqcd4", "dQw4w9WgXcQ", "9bZkp7q19f0"],
      },
      {
        name: "Master In Python",
        detail: "This is the best course of Python available in the market.",
        price: "₹399",
        img: "/images/python.png",
        duration: "4 months",
        batchTiming: "Mon-Fri, 7-9 PM",
        validity: "8 months",
        description: "Rapidly develop feature-rich applications using Python built-in statements, functions, and collection types.",
        youtubeLinks: ["PIvOfc77SQ", "CyGodpcid4"],
      },
      {
        name: "Champion C++",
        detail: "This is the best course of C++ Programming available in the market.",
        price: "₹199",
        img: "/images/cpp.png",
        duration: "4 months",
        batchTiming: "Mon-Fri, 7-9 PM",
        validity: "8 months",
        description: "Master the fundamentals and advanced concepts of C++ programming, building a strong foundation for software development.",
        youtubeLinks: ["CyGodpcid4"],
      },
      {
        name: "Dashing DSA",
        detail: "This is the best course of Data Structure And Algorithm available in the market.",
        price: "₹3599",
        img: "/images/dsa.png",
        duration: "8 months",
        batchTiming: "Mon-Fri, 7-9 PM",
        validity: "12 months",
        description: "Strong Foundation for Programming: DSA is the bedrock of computer science. Understanding how data is organized (data structures) and manipulated (algorithms) empowers you to solve problems efficiently.",
        youtubeLinks: ["PIOfcR77SQ", "Cyodpqcid4"],
      },
      {
        name: "MERN Stack",
        detail: "This is the best course of MERN Stack available in the market.",
        price: "₹3999",
        img: "/images/mern.png",
        duration: "6 months",
        batchTiming: "Mon-Fri, 7-9 PM",
        validity: "9 months",
        description: "The MERN stack is a collection of technologies that comprise a full-stack capable of building applications with JavaScript. Because JavaScript is a front-end programming language, developers need additional tools in order to ensure functionality on the back end. MongoDB, Express, React, and Node.",
        youtubeLinks: ["PIOfcR7SQ", "CyGodpqcd4"],
      },
      {
        name: "Artificial Intelligence",
        detail: "This is the best course of Artificial Intelligence available in the market.",
        price: "₹5999",
        img: "/images/ai.png",
        duration: "9 months",
        batchTiming: "Mon-Fri, 7-9 PM",
        validity: "15 months",
        description: "The Artificial Intelligence ( AI) course provides the students with in-depth knowledge of both basic and advanced concepts of machine learning, networks, and data science.",
        youtubeLinks: ["PIvOfcR77SQ", "CyGodpqcid4"],
      },
    ];
    await Course.insertMany(courses); // Insert new courses
    console.log("Database seeded with courses!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the seed function (only for testing)
seedCourses();