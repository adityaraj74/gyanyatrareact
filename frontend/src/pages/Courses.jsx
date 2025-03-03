import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import "../courses.css"; // Import the new CSS

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching data (replace with an API call if needed)
    const fetchedCourses = [
      {
        id: 1,
        img: "/images/java.png",
        name: "Advanced Java",
        detail: "This is the best course of Java Programming available in the market.",
        price: "₹999",
        duration: "3 months",
        batchTiming: "Mon-Fri, 6-8 PM",
        validity: "6 months",
        description:
          "A Java programming course is designed to teach students the fundamentals of programming using Java. Online Java programming Full Certification Course will provide a comprehensive introduction to Java fundamental principles and help build a solid foundation for further learning.",
        youtubeLinks: [
          "PIvOfcR77Q", // Video 1
          "CyGodpqcd4", // Video 2
          "dQw4w9WgXcQ", // Video 3
          "9bZkp7q19f0", // Video 4
        ],
      },
      {
        id: 2,
        img: "/images/python.png", // Use absolute path
        name: "Master In Python",
        detail: "This is the best course of Python available in the market.",
        price: "₹399",
        duration: "4 months",
        batchTiming: "Mon-Fri, 7-9 PM",
        validity: "8 months",
        description:
          "Rapidly develop feature-rich applications using Python built-in statements, functions, and collection types. Structure code with classes, modules, and packages that leverage object-oriented features.",
        youtubeLinks: ["PIvOfc77SQ", "CyGodpcid4"],
      },
      {
        id: 3,
        img: "/images/cpp.png",
        name: "Champion C++",
        detail: "This is the best course of C++ Programming available in the market.",
        price: "₹199",
        duration: "4 months",
        batchTiming: "Mon-Fri, 7-9 PM",
        validity: "8 months",
        description:
          "Master the fundamentals and advanced concepts of C++ programming, building a strong foundation for software development.",
        youtubeLinks: ["CyGodpcid4"],
      },
      {
        id: 4,
        img: "/images/dsa.png",
        name: "Dashing DSA",
        detail: "This is the best course of Data Structure And Algorithm available in the market.",
        price: "₹3599",
        duration: "8 months",
        batchTiming: "Mon-Fri, 7-9 PM",
        validity: "12 months",
        description:
          "Strong Foundation for Programming: DSA is the bedrock of computer science. Understanding how data is organized (data structures) and manipulated (algorithms) empowers you to solve problems efficiently.",
        youtubeLinks: ["PIOfcR77SQ", "Cyodpqcid4"],
      },
      {
        id: 5,
        img: "/images/mern.png",
        name: "MERN Stack",
        detail: "This is the best course of MERN Stack available in the market.",
        price: "₹3999",
        duration: "6 months",
        batchTiming: "Mon-Fri, 7-9 PM",
        validity: "9 months",
        description:
          "The MERN stack is a collection of technologies that comprise a full-stack capable of building applications with JavaScript. Because JavaScript is a front-end programming language, developers need additional tools in order to ensure functionality on the back end. MongoDB, Express, React, and Node.",
        youtubeLinks: ["PIOfcR7SQ", "CyGodpqcd4"],
      },
      {
        id: 6,
        img: "/images/ai.png",
        name: "Artificial Intelligence",
        detail: "This is the best course of Artificial Intelligence available in the market.",
        price: "₹5999",
        duration: "9 months",
        batchTiming: "Mon-Fri, 7-9 PM",
        validity: "15 months",
        description:
          "The Artificial Intelligence ( AI) course provides the students with in-depth knowledge of both basic and advanced concepts of machine learning, networks, and data science.",
        youtubeLinks: ["PIvOfcR77SQ", "CyGodpqcid4"],
      },
    ];

    setCourses(fetchedCourses);
  }, []);

  const handleCourseClick = (course) => {
    localStorage.setItem("selectedCourse", JSON.stringify(course));
    navigate("/course-detail"); // Navigate to the course detail page
  };

  return (
    <div className="courses-page">
      <div className="courses-header">
        <h1>Available Courses</h1>
        <p>Choose from a wide range of courses to enhance your skills and knowledge.</p>
      </div>
      <div className="course-cards">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onClick={() => handleCourseClick(course)}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;