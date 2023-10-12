import { createSlice } from '@reduxjs/toolkit';

import { GET_AUTHORIZED_USER_BY_ID } from '#reducers/user';
import { Reducers } from '#types/reducers';
import { UserSlice } from '#types/slices';

const initialState: UserSlice = {
  data: {
    avatar: '',
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
    addCase(GET_AUTHORIZED_USER_BY_ID.fulfilled, (_, { payload }) => ({
      data: {
        avatar: payload.avatar?.url,
        email: payload.email,
        fullName: payload.fullName,
        id: payload.id,
        password: payload.password
      },
      isLoading: false,
      isLoggedIn: true
    }));
    addCase(GET_AUTHORIZED_USER_BY_ID.pending, (state) => ({
      ...state,
      isLoading: true,
      isLoggedIn: false
    }));
    addCase(GET_AUTHORIZED_USER_BY_ID.rejected, (state) => ({
      ...state,
      isLoading: false,
      isLoggedIn: false
    }));
  },
  initialState,
  name: 'user',
  reducers: {
    RESET_USER: () => initialState
  }
});

export const { RESET_USER } = userSlice.actions;

export const userReducer = userSlice.reducer;

export const userSelector = (state: Reducers) => state.user;
