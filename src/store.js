import { configureStore, createSlice } from '@reduxjs/toolkit';

const displaySlice = createSlice({
  name: 'display',
  initialState: {
    text: '',
  },
  reducers: {
    setDisplayText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setDisplayText } = displaySlice.actions;

export const store = configureStore({
  reducer: {
    display: displaySlice.reducer,
  },
});
