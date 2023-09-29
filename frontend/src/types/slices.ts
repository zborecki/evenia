import { IEventCard } from './items';

export interface PaginatedEventsSlice {
  categoryName: string;
  events: IEventCard[];
  hasNextPage: boolean;
  isLoading: boolean;
  offset: {
    [offset in 'initial' | 'next']: number;
  };
}

export interface UserSlice {
  data: {
    email: string;
    fullName: string;
    id: string;
    password: string;
  },
  isLoading: boolean;
  isLoggedIn: boolean;
}
