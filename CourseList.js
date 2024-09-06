import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { db } from '../firebaseConfig'; // Correct import path
import { collection, getDocs, updateDoc, doc, getDoc } from 'firebase/firestore'; // Import getDoc
import { setCourses } from '../redux/coursesSlice'; // Remove if not used directly
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import './CourseList.css'; // Import the CSS file

const CourseList = () => {
  const dispatch = useDispatch();
  const [courses, setCoursesState] = useState([]); // Renamed to avoid conflict
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'courses'));
        const fetchedCourses = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCoursesState(fetchedCourses); // Renamed to avoid conflict
        setFilteredCourses(fetchedCourses);
        dispatch(setCourses(fetchedCourses)); // Dispatch data to Redux store
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, [dispatch]);

  useEffect(() => {
    const filtered = courses.filter(course =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCourses(filtered);
  }, [searchQuery, courses]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleLike = async (courseId) => {
    try {
      const courseRef = doc(db, 'courses', courseId);
      const courseDoc = await getDoc(courseRef);
      const courseData = courseDoc.data();
      await updateDoc(courseRef, { likes: (courseData.likes || 0) + 1 });
      // Update local state or re-fetch courses to reflect the change
      const updatedCourses = courses.map(course =>
        course.id === courseId ? { ...course, likes: (courseData.likes || 0) + 1 } : course
      );
      setCoursesState(updatedCourses); // Renamed to avoid conflict
      setFilteredCourses(updatedCourses);
    } catch (error) {
      console.error('Error liking course:', error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="course-list">
        {filteredCourses.map(course => (
          <div key={course.id} className="course-box">
            <h3 className="course-title">{course.name}</h3>
            <p className="course-instructor">Instructor: {course.instructor}</p>
            <p>Duration: {course.duration}</p>
            <Link to={`/course/${course.id}`} className="course-button">View Details</Link>
            <button onClick={() => handleLike(course.id)} className="like-button">
              Like ({course.likes || 0})
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
