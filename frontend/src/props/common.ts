export type Details = {
  [key in 'description' | 'title']: string;
};

export interface Link {
  children: string;
  href?: string;
}

export interface ProtectedLink extends Link {
  isProtected?: boolean;
}
