import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: null,
  },

  reducers: {
    updateUserReducer: (state, action) => {
      state.current = { ...state.current, ...action.payload.userInfo };
    },
    signOutReducer: state => {
      state.current = null;
    },
  },
});

export default userSlice.reducer;
export const { updateUserReducer, signOutReducer } = userSlice.actions;
