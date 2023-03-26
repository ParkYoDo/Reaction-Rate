import { createSlice } from '@reduxjs/toolkit';

const initialState: [string, number][] = [];

const score = createSlice({
  name: 'score',
  initialState,
  reducers: {
    addScore(state, action) {
      return [...state, action.payload].sort((a, b) => a[1] - b[1]);
    },
  },
});

export default score;
export const { addScore } = score.actions;
