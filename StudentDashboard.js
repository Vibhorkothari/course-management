// src/components/StudentDashboard.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markCompleted } from '../redux/enrolledCoursesSlice';
import EnrolledCourseCard from './EnrolledCourseCard';
import './StudentDashboard.css'; // Import CSS

const StudentDashboard = () => {
  const enrolledCourses = useSelector(state => state.enrolledCourses.courses);
  const dispatch = useDispatch();

  const handleMarkCompleted = (id) => {
    dispatch(markCompleted(id));
  };

  return (
    <div className="student-dashboard">
      <h1>Student Dashboard</h1>
      {enrolledCourses.length === 0 ? (
        <p>No courses enrolled yet.</p>
      ) : (
        enrolledCourses.map(course => (
          <EnrolledCourseCard 
            key={course.id} 
            course={course} 
            onComplete={() => handleMarkCompleted(course.id)} 
          />
        ))
      )}
    </div>
  );
};

export default StudentDashboard;
