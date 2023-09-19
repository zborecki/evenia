import { ROUTE } from '#constants/routes';
import { ProtectedLink } from '#props/common';

export const links: ProtectedLink[] = [
  {
    children: 'home',
    href: ROUTE.HOME
  },
  {
    children: 'terms_of_service',
    href: ROUTE.TERMS_OF_SERVICE
  }
];
