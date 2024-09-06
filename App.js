import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
