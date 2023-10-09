import { configureStore } from '@reduxjs/toolkit';

import { eventReducer, eventSlice } from '#slices/event';
import { paginatedEventsReducer, paginatedEventsSlice } from '#slices/paginated-events';
import { userReducer, userSlice } from '#slices/user';

const store = configureStore({
  devTools: true,
  reducer: {
    [eventSlice.name]: eventReducer,
    [paginatedEventsSlice.name]: paginatedEventsReducer,
    [userSlice.name]: userReducer
  }
});

export type AppDispatch = typeof store.dispatch;

export { store };
