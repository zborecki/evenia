export interface AuthOrganizerResponse {
  organizer: {
    id: string;
  }
}

export interface GetCategoriesResponse {
  categories: {
    name: string;
  }[];
}

export interface LogInOrganizerResponse {
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

export interface UserDetailsOrganizerResponse {
  organizer: {
    email: string;
    fullName: string;
    id: string;
    password: string;
  }
}
