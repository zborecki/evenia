import { redirect } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';

import { Loader } from '#components/loader';
import { ProfileCard } from '#components/profile-card';
import { COOKIE } from '#constants/keys';
import { ROUTE } from '#constants/routes';
import { userSelector } from '#slices/user';

const Protected = () => {
  const t = useTranslations('Profile_card');
  const [cookies] = useCookies([COOKIE.AUTH]);
  const { data: { avatar, fullName }, isLoggedIn } = useSelector(userSelector);

  useEffect(() => {
    if (!cookies.auth_token) {
      redirect(ROUTE.SIGN_IN);
    }
  }, [cookies.auth_token]);

  return !isLoggedIn ? <Loader /> : (
    <ProfileCard
      alt={t('alt', { fullName })}
      avatar={avatar}
      fullName={fullName}
    />
  );
};

export { Protected };
