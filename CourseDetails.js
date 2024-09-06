import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './CourseDetails.css';

const CourseDetails = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const courses = useSelector(state => state.courses.list); // Use list instead of selectedCourse
  const course = courses.find(course => course.id === id);

  if (!course) return <div>Select a course to view details</div>;

  return (
    <div className="course-details">
      <h1>{course.name}</h1>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Description:</strong> {course.description}</p>
      {course.enrollmentStatus && <p><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>}
      {course.duration && <p><strong>Duration:</strong> {course.duration}</p>}
      {course.schedule && <p><strong>Schedule:</strong> {course.schedule}</p>}
      {course.location && <p><strong>Location:</strong> {course.location}</p>}
      {course.prerequisites && course.prerequisites.length > 0 && (
        <p><strong>Prerequisites:</strong> {course.prerequisites.join(', ')}</p>
      )}
      <h3>Syllabus</h3>
      {course.syllabus && course.syllabus.length > 0 ? (
        <ul>
          {course.syllabus.map((item, index) => (
            <li key={index}>
              <strong>Week {item.week}:</strong> {item.topic}
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No syllabus available</p>
      )}
    </div>
  );
};

export default CourseDetails;
