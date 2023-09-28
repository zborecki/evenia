import { createSlice } from '@reduxjs/toolkit';

import { SET_EVENTS_PAYLOAD } from '#props/payloads';
import { EventsSlice } from '#props/slices';
import { FETCH_EVENTS, UPDATE_EVENTS } from '#reducers/events-reducers';

const initialState: EventsSlice = {
  data: {
    events: []
  },
  isLoading: true
};

export const eventsSlice = createSlice({
  extraReducers: ({ addCase }) => {
    addCase(FETCH_EVENTS.fulfilled, (_, { payload: { events } }) => ({
      data: { events },
      isLoading: false
    }));
    addCase(FETCH_EVENTS.pending, (state) => ({
      ...state,
      isLoading: true
    }));
    addCase(FETCH_EVENTS.rejected, (state) => ({
      ...state,
      isLoading: false
    }));
    addCase(UPDATE_EVENTS.fulfilled, (_, { payload: { events } }) => ({
      data: {
        events: [...events]
      },
      isLoading: false
    }));
    addCase(UPDATE_EVENTS.pending, (state) => ({
      ...state,
      isLoading: true
    }));
    addCase(UPDATE_EVENTS.rejected, (state) => ({
      ...state,
      isLoading: false
    }));
  },
  initialState,
  name: 'events',
  reducers: {
    SET_EVENTS: (_, { payload }: SET_EVENTS_PAYLOAD) => ({
      data: {
        events: [...payload]
      },
      isLoading: false
    })
  }
});

export const { SET_EVENTS } = eventsSlice.actions;

export const eventsReducer = eventsSlice.reducer;

export const eventsSelector = (state: { events: EventsSlice }) => state.events;
