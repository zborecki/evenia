import { configureStore } from '@reduxjs/toolkit';

import { tabsReducer, tabsSlice } from '#slices/tabs-slice';
import { userReducer, userSlice } from '#slices/user-slice';

const store = configureStore({
  devTools: true,
  reducer: {
    [tabsSlice.name]: tabsReducer,
    [userSlice.name]: userReducer
  }
});

export type AppDispatch = typeof store.dispatch;

export { store };
