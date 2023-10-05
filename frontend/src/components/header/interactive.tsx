'use client';

import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { HeaderInteractiveProps } from './props';
import { Protected } from './protected';

import { Public } from '#components/header/public';
import { AppDispatch } from '#libraries/redux';
import { GET_AUTHORIZED_USER_BY_ID } from '#reducers/user';

const Interactive: FC<HeaderInteractiveProps> = ({ authToken }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (authToken) {
      dispatch(GET_AUTHORIZED_USER_BY_ID(authToken));
    }
  }, []);

  return !authToken ? <Public /> : <Protected />;
};

export { Interactive };
