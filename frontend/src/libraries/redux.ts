import { configureStore } from '@reduxjs/toolkit';

import { userReducer, userSlice } from '#slices/user-slice';

const store = configureStore({
  devTools: true,
  reducer: {
    [userSlice.name]: userReducer
  }
});

export { store };
