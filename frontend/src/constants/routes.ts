export enum ROUTE {
  HOME = '/',
  MY_TICKETS = '/my-tickets',
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  TERMS_OF_SERVICE = '/terms-of-service',
  TICKET = '/ticket'
}

export const mergeSlug = (slug: string[]) => slug.join('/');
