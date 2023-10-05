'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';

import { Public } from '#components/header/public';
import { ProfileCard } from '#components/profile-card';
import { COOKIE } from '#constants/keys';
import { AppDispatch } from '#libraries/redux';
import { GET_AUTHORIZED_USER_BY_ID } from '#reducers/user';
import { userSelector } from '#slices/user';

const Interactive = () => {
  const dispatch = useDispatch<AppDispatch>();
  const t = useTranslations('Profile_card');
  const [cookies] = useCookies([COOKIE.AUTH]);
  const { data: { avatar, fullName }, isLoading, isLoggedIn } = useSelector(userSelector);

  useEffect(() => {
    if (cookies.auth_token) {
      dispatch(GET_AUTHORIZED_USER_BY_ID(cookies.auth_token));
    }
  }, [cookies, dispatch]);

  return (
    <div>
      {
        !isLoggedIn ? (
          <Public isLoading={isLoading} />
        ) : (
          <ProfileCard
            alt={t('alt', { fullName })}
            avatar={avatar}
            fullName={fullName}
          />
        )
      }
    </div>
  );
};

export { Interactive };
