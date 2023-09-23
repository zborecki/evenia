export interface AuthOrganizerResponse {
  organizer: {
    id: string;
  }
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
