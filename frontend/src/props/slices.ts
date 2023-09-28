import { EventCardsResponse } from './services';

export interface EventsSlice {
  data: EventCardsResponse;
  isLoading: boolean;
}

export interface TabsSlice {
  categoryName: string;
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
