import { useTranslations } from 'next-intl';

import { Button } from '#components/button';
import { ROUTE } from '#constants/routes';

const Public = () => {
  const button = useTranslations('Button');

  return (
    <div className="evenia-header__public">
      <Button href={ROUTE.SIGN_IN}>{ button('sign_in') }</Button>
    </div>
  );
};

export { Public };
