import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../your-courses.css";

const YourCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      const userId = localStorage.getItem("userId"); // Get the user ID from localStorage
      if (!userId) {
        alert("User not logged in. Please sign in.");
        navigate("/signin");
        return;
      }

      try {
        // Fetch enrolled course names for the user
        const response = await fetch(`http://localhost:5000/api/courses/enrolled/${userId}`);
        const data = await response.json();
        console.log("Enrolled Course Names:", data.enrolledCourses); // Debug log

        if (response.ok) {
          // Fetch all courses to match enrolled course names with full course details
          const coursesResponse = await fetch("http://localhost:5000/api/courses");
          const coursesData = await coursesResponse.json();
          console.log("All Courses:", coursesData); // Debug log

          // Match enrolled course names with full course details
          const enrolledCourseDetails = data.enrolledCourses
            .map((courseName) => coursesData.find((course) => course.name === courseName))
            .filter((course) => course !== undefined); // Filter out undefined values

          console.log("Enrolled Course Details:", enrolledCourseDetails); // Debug log

          // Update the state with the enrolled course details
          setEnrolledCourses(enrolledCourseDetails);
        } else {
          console.error("Failed to fetch enrolled courses:", data.message);
        }
      } catch (error) {
        console.error("Error fetching enrolled courses:", error);
      }
    };

    fetchEnrolledCourses();
  }, [navigate]);

  const handleCourseClick = (course) => {
    localStorage.setItem("selectedCourse", JSON.stringify(course));
    navigate("/course-videos"); // Navigate to the course videos page
  };

  return (
    <div className="your-courses-page">
      <h1>Your Courses</h1>
      {enrolledCourses.length > 0 ? (
        <div className="course-list">
          {enrolledCourses.map((course, index) => (
            <div key={index} className="course-card" onClick={() => handleCourseClick(course)}>
              <img src={course.img} alt={course.name} className="course-image" />
              <div className="course-content">
                <h3>{course.name}</h3>
                <p>{course.detail}</p>
                <p><strong>Price:</strong> {course.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>You have not enrolled in any courses yet.</p>
      )}
    </div>
  );
};

export default YourCourses;