import React from "react";
import "../courses.css"; // Import the new CSS

const CourseCard = ({ course, onClick }) => {
  return (
    <div className="course-card" onClick={onClick}>
      <img src={course.img} alt={course.name} className="course-image" />
      <div className="course-content">
        <h3 className="course-title">{course.name}</h3>
        <p className="course-detail">{course.detail}</p>
        <p className="course-price">{course.price}</p>
      </div>
    </div>
  );
};

export default CourseCard;