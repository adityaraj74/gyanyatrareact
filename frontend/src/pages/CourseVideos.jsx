import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../course-videos.css";

const CourseVideos = () => {
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the selected course from localStorage
    const selectedCourse = JSON.parse(localStorage.getItem("selectedCourse"));
    if (selectedCourse) {
      setCourse(selectedCourse);
    } else {
      navigate("/your-courses"); // Redirect to "Your Courses" page if no course is selected
    }
  }, [navigate]);

  if (!course) {
    return <div>Loading...</div>; // Show a loading state while fetching the course
  }

  return (
    <div className="course-videos-page">
      <h1 className="course-title">{course.name} Videos</h1>
      <div className="video-list">
        {course.youtubeLinks.map((videoId, index) => (
          <div key={index} className="video-item">
            <div className="video-container">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="video-title">Video {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseVideos;