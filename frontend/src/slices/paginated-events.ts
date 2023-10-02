import { createSlice } from '@reduxjs/toolkit';

import { GET_PAGINATED_EVENTS } from '#reducers/paginated-events';
import { SetCategoryNamePayload, SetOffsetPayload } from '#types/actions';
import { Reducers } from '#types/reducers';
import { PaginatedEventsSlice } from '#types/slices';

const initialState: PaginatedEventsSlice = {
  categoryName: '',
  events: [],
  hasNextPage: false,
  isLoading: true,
  offset: {
    initial: 4,
    next: 4
  }
};

export const paginatedEventsSlice = createSlice({
  extraReducers: ({ addCase }) => {
    addCase(GET_PAGINATED_EVENTS.fulfilled, (state, { payload }) => ({
      ...state,
      events: [...state.events, ...payload.events],
      hasNextPage: payload.hasNextPage,
      isLoading: false
    }));
    addCase(GET_PAGINATED_EVENTS.pending, (state) => ({
      ...state,
      isLoading: true
    }));
    addCase(GET_PAGINATED_EVENTS.rejected, (state) => ({
      ...state,
      isLoading: false
    }));
  },
  initialState,
  name: 'paginatedEvents',
  reducers: {
    CLEAR_EVENTS: (state) => ({
      ...state,
      events: [],
      hasNextPage: false,
      offset: {
        initial: initialState.offset.initial,
        next: initialState.offset.next
      }
    }),
    NEXT_PAGE: (state) => ({
      ...state,
      offset: {
        initial: state.offset.initial,
        next: state.offset.next + state.offset.initial
      }
    }),
    SET_CATEGORY_NAME: (state, { payload }: SetCategoryNamePayload) => ({
      ...state,
      categoryName: payload.categoryName
    }),
    SET_OFFSET: (state, { payload }: SetOffsetPayload) => ({
      ...state,
      offset: {
        initial: payload.offset,
        next: payload.offset
      }
    })
  }
});

export const {
  CLEAR_EVENTS,
  NEXT_PAGE,
  SET_CATEGORY_NAME,
  SET_OFFSET
} = paginatedEventsSlice.actions;

export const paginatedEventsReducer = paginatedEventsSlice.reducer;

export const paginatedEventsSelector = (state: Reducers) => state.paginatedEvents;
