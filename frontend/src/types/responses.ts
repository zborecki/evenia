import { IEventCard } from './items';

export interface GetAuthorizedUserResponse {
  organizersConnection: {
    edges: {
      node: {
        id: string;
      }
    }[];
  }
}

export interface GetAuthResponse {
  organizer: {
    id: string;
  }
}

export interface GetCategoriesResponse {
  categories: {
    name: string;
  }[];
}

export interface GetPaginatedEventsResponse {
  eventsConnection: {
    edges: {
      node: IEventCard;
    }[];
    pageInfo: {
      hasNextPage: boolean;
    };
  }
}

export interface GetUserResponse {
  organizer: {
    email: string;
    fullName: string;
    id: string;
    password: string;
  }
}

export interface PostUserResponse {
  createOrganizer: {
    id: string;
  }
  publishOrganizer: {
    createdAt: string;
  }
}
