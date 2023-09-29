'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '#components/button';
import { COOKIE } from '#constants/keys';
import { ROUTE } from '#constants/routes';
import { AppDispatch } from '#libraries/redux';
import { GET_AUTHORIZED_USER_BY_ID } from '#reducers/user';
import { userSelector } from '#slices/user';

const Interactive = () => {
  const dispatch = useDispatch<AppDispatch>();
  const button = useTranslations('Button');
  const [cookies] = useCookies([COOKIE.AUTH]);
  const user = useSelector(userSelector);

  useEffect(() => {
    if (cookies.auth_token) {
      dispatch(GET_AUTHORIZED_USER_BY_ID(cookies.auth_token));
    }
  }, [cookies, dispatch]);

  return (
    <div>
      {
        !user.isLoggedIn ? (
          <Button href={ROUTE.SIGN_IN}>{ button('sign_in') }</Button>
        ) : <p>{ user.data.fullName }</p>
      }
    </div>
  );
};

export { Interactive };
