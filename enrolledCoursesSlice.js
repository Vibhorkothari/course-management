import { createSlice } from '@reduxjs/toolkit';

const enrolledCoursesSlice = createSlice({
  name: 'enrolledCourses',
  initialState: {
    courses: [], // or your initial state
  },
  reducers: {
    markCompleted: (state, action) => {
      const course = state.courses.find(course => course.id === action.payload);
      if (course) {
        course.completed = true;
      }
    },
    // Add other reducers here
  },
});

export const { markCompleted } = enrolledCoursesSlice.actions;

export default enrolledCoursesSlice.reducer;
