// src/components/EnrolledCourseCard.js
import React from 'react';
import './EnrolledCourseCard.css'; // Import the CSS file for styling

const EnrolledCourseCard = ({ course, onComplete }) => {
  const progress = course.completed ? 100 : course.progress; // Assume progress is a percentage

  return (
    <div className="enrolled-course-card">
      <img src={course.thumbnail} alt={course.name} className="course-thumbnail" />
      <div className="course-details">
        <h2>{course.name}</h2>
        <p>Instructor: {course.instructor}</p>
        <p>Due Date: {course.dueDate || 'N/A'}</p>
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <button 
          onClick={onComplete} 
          disabled={course.completed}
        >
          {course.completed ? 'Completed' : 'Mark as Completed'}
        </button>
      </div>
    </div>
  );
};

export default EnrolledCourseCard;
