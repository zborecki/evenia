import { createSlice } from '@reduxjs/toolkit';

import { UserSlice } from '#props/slices';
import { FETCH_USER_DETAILS_BY_ID } from '#reducers/user-reducers';

const initialState: UserSlice = {
  data: {
    email: '',
    fullName: '',
    id: '',
    password: ''
  },
  isLoading: false,
  isLoggedIn: false
};

export const userSlice = createSlice({
  extraReducers: ({ addCase }) => {
    addCase(FETCH_USER_DETAILS_BY_ID.fulfilled, (_, { payload }) => ({
      data: { ...payload },
      isLoading: false,
      isLoggedIn: true
    }));
    addCase(FETCH_USER_DETAILS_BY_ID.pending, (state) => ({
      ...state,
      isLoading: true,
      isLoggedIn: false
    }));
    addCase(FETCH_USER_DETAILS_BY_ID.rejected, (state) => ({
      ...state,
      isLoading: false,
      isLoggedIn: false
    }));
  },
  initialState,
  name: 'user',
  reducers: {
  }
});

export const userReducer = userSlice.reducer;

export const userSelector = (state: { user: UserSlice }) => state.user;
