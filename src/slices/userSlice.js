import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: null,
    nickName: null,
  },

  reducers: {
    updateUserInfo: (user, action) => {
      const { email, nickName } = action.payload;

      user.email = email;
      user.nickName = nickName;
    },
  },
});

export default userSlice.reducer;
export const { updateUserInfo } = userSlice.actions;
