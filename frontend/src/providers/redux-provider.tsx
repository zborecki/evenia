'use client';

import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { store } from '#libraries/redux';

const ReduxProvider: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>
    { children }
  </Provider>
);

export { ReduxProvider };
