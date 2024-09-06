// src/components/EnrolledCourseCard.js
import React from 'react';

const CourseCard = ({ course, onComplete }) => (
  <div className="enrolled-course-card">
    <img src={course.thumbnail} alt={course.name} />
    <h2>{course.name}</h2>
    <p>Instructor: {course.instructor}</p>
    <p>Due Date: {course.dueDate || 'N/A'}</p>
    <button onClick={onComplete} disabled={course.completed}>
      {course.completed ? 'Completed' : 'Mark as Completed'}
    </button>
  </div>
);

export default CourseCard;
