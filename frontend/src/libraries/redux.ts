import { configureStore } from '@reduxjs/toolkit';

import { eventsReducer, eventsSlice } from '#slices/events-slice';
import { tabsReducer, tabsSlice } from '#slices/tabs-slice';
import { userReducer, userSlice } from '#slices/user-slice';

const store = configureStore({
  devTools: true,
  reducer: {
    [eventsSlice.name]: eventsReducer,
    [tabsSlice.name]: tabsReducer,
    [userSlice.name]: userReducer
  }
});

export type AppDispatch = typeof store.dispatch;

export { store };
