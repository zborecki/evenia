import { EventCardsResponse } from './services';

export interface EventsSlice {
  data: EventCardsResponse;
  isLoading: boolean;
}

export interface TabsSlice {
  categoryId: number;
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
