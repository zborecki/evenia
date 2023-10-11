import { IPartner, ITicket } from './common';
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

export interface GetEventBySlugResponse {
  event: {
    author: {
      organizerName: string;
    };
    category: {
      name: string;
    };
    date: string;
    description: string;
    details: string;
    image: {
      fileName: string;
      url: string;
    };
    location: string;
    price: number;
    title: string;
  }
}

export interface GetPaginatedEventsCountResponse {
  eventsConnection: {
    pageInfo: {
      pageSize: number;
    }
  }
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

export interface GetPartnersResponse {
  partners: IPartner[];
}

export interface GetTicketsResponse {
  organizersConnection: {
    edges: {
      node: {
        tickets: ITicket[];
      }
    }[];
  }
}

export interface GetUserResponse {
  organizer: {
    avatar: {
      url: string;
    };
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
