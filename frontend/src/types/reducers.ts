import { EventSlice, PaginatedEventsSlice, UserSlice } from './slices';

export interface Reducers {
  event: EventSlice;
  paginatedEvents: PaginatedEventsSlice;
  user: UserSlice;
}
