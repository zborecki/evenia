import { createSlice } from '@reduxjs/toolkit';

import { SetEventPayload } from '#types/actions';
import { Reducers } from '#types/reducers';
import { EventSlice } from '#types/slices';

const initialState: EventSlice = {
  image: {
    alt: '',
    src: ''
  },
  price: 0,
  title: ''
};

export const eventSlice = createSlice({
  initialState,
  name: 'event',
  reducers: {
    SET_EVENT: (_, { payload }: SetEventPayload) => ({
      ...payload
    })
  }
});

export const { SET_EVENT } = eventSlice.actions;

export const eventReducer = eventSlice.reducer;

export const eventSelector = (state: Reducers) => state.event;
