import { ROUTE } from '#constants/routes';
import { IProtectedLink } from '#types/common';

export const footerLinks: IProtectedLink[] = [
  {
    children: 'home',
    href: ROUTE.HOME
  },
  {
    children: 'terms_of_service',
    href: ROUTE.TERMS_OF_SERVICE
  }
];
