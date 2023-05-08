import { createSlice } from '@reduxjs/toolkit';

const toastSlice = createSlice({
  name: 'toast',
  initialState: {
    list: [],
  },
  reducers: {
    addToast: (state, action) => {
      const newId = Math.max(...state.list.map(({ id }) => id), 0) + 1;
      const { toastInfo } = action.payload;

      state.list = [...state.list, { id: newId, ...toastInfo }];
    },
    removeToast: (state, action) => {
      state.list = state.list.filter(({ id }) => action.payload !== id);
    },
  },
});

export default toastSlice.reducer;
export const { addToast, removeToast } = toastSlice.actions;
