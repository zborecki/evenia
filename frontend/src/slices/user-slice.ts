import { createSlice } from '@reduxjs/toolkit';

import { UserSlice } from '#props/slices';

const initialState: UserSlice = {
  isLoggedIn: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  }
});

export const userReducer = userSlice.reducer;
