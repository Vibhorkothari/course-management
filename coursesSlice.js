import { createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    list: [],
    selectedCourse: null,
  },
  reducers: {
    setCourses(state, action) {
      state.list = action.payload;
    },
    setSelectedCourse(state, action) {
      state.selectedCourse = action.payload;
    },
  },
});

export const { setCourses, setSelectedCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
