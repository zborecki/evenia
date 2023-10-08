export interface getPaginatedEventsCountRequest {
  categoryName: string;
  first?: number;
}

export interface GetPaginatedEventsRequest {
  categoryName: string;
  first: number;
  skip: number;
}
