import { PaginatedEventsSlice, UserSlice } from './slices';

export interface Reducers {
  paginatedEvents: PaginatedEventsSlice;
  user: UserSlice;
}
