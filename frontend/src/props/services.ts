import { EventCard } from '#props/common';

export interface AuthOrganizerResponse {
  organizer: {
    id: string;
  }
}

export interface EventCardsResponse {
  events: EventCard[];
}

export interface CategoriesResponse {
  categories: {
    name: string;
  }[];
}

export interface OrganizerIdResponse {
  organizersConnection: {
    edges: {
      node: {
        id: string;
      }
    }[];
  }
}

export interface MutateOrganizerResponse {
  createOrganizer: {
    id: string;
  }
  publishOrganizer: {
    createdAt: string;
  }
}

export interface OrganizerResponse {
  organizer: {
    email: string;
    fullName: string;
    id: string;
    password: string;
  }
}
