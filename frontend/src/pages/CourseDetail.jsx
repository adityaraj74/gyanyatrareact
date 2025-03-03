import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../course-detail.css";

const CourseDetail = () => {
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the selected course from localStorage
    const selectedCourse = JSON.parse(localStorage.getItem("selectedCourse"));
    if (selectedCourse) {
      setCourse(selectedCourse);
    } else {
      navigate("/courses"); // Redirect to courses page if no course is selected
    }
  }, [navigate]);

  const handleEnroll = async () => {
    if (course) {
      try {
        const userId = localStorage.getItem("userId"); // Ensure userId is stored in localStorage
        if (!userId) {
          alert("User not logged in. Please sign in.");
          navigate("/signin");
          return;
        }
  
        const response = await fetch("http://localhost:5000/api/courses/enroll", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId, courseName: course.name }), // Send userId and courseName
        });
  
        const data = await response.json();
        if (response.ok) {
          alert("You have successfully enrolled in this course!");
          navigate("/your-courses"); // Redirect to "Your Courses" page
        } else {
          alert(data.message);
        }
      } catch (error) {
        alert("Something went wrong");
      }
    }
  };

  if (!course) {
    return <div>Loading...</div>; // Show a loading state while fetching the course
  }

  return (
    <div className="course-detail-page">
      <div className="course-detail-header">
        <h1>{course.name}</h1>
        <p>{course.detail}</p>
      </div>
      <div className="course-detail-content">
        <div className="course-image">
          <img src={course.img} alt={course.name} />
        </div>
        <div className="course-info">
          <h2>Course Details</h2>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Batch Timing:</strong> {course.batchTiming}</p>
          <p><strong>Validity:</strong> {course.validity}</p>
          <p><strong>Price:</strong> {course.price}</p>
          <p><strong>Description:</strong> {course.description}</p>
          <button className="enroll-button" onClick={handleEnroll}>
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;