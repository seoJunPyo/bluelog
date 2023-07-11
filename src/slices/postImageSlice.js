import { createSlice } from '@reduxjs/toolkit';

const postImageSlice = createSlice({
  name: 'images',
  initialState: {
    list: [],
  },
  reducers: {
    addImage: (state, action) => {
      state.list = [...state.list, action.payload];
    },

    emptyImages: state => {
      state.list = [];
    },
  },
});

export default postImageSlice.reducer;
export const { addImage, emptyImages } = postImageSlice.actions;
