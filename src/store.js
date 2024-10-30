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

const drumSlice = createSlice({
  name: 'drum',
  initialState: {
    power: true,
    volume: 0.5,
  },
  reducers: {
    togglePower: (state) => {
      state.power = !state.power;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
  },
});

export const { setDisplayText } = displaySlice.actions;
export const { togglePower, setVolume } = drumSlice.actions;

export const store = configureStore({
  reducer: {
    display: displaySlice.reducer,
    drum: drumSlice.reducer,
  },
});
