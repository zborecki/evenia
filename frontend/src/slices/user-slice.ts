import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { SetTokenPayload } from '#props/payloads';
import { UserSlice } from '#props/slices';

const initialState: UserSlice = {
  id: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SET_TOKEN: (state, action: PayloadAction<SetTokenPayload>) => ({
      ...state,
      id: action.payload.id
    })
  }
});

export const { SET_TOKEN } = userSlice.actions;

export const userReducer = userSlice.reducer;
