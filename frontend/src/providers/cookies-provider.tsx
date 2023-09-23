'use client';

import { FC, PropsWithChildren } from 'react';
import { CookiesProvider as Provider } from 'react-cookie';

const CookiesProvider: FC<PropsWithChildren> = ({ children }) => (
  <Provider defaultSetOptions={{ path: '/' }}>
    { children }
  </Provider>
);

export { CookiesProvider };
