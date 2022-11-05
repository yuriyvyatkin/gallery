import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  status: 'idle',
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    store: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { store } = gallerySlice.actions;

export const selectStorage = (state) => state.gallery.value;

export default gallerySlice.reducer;
