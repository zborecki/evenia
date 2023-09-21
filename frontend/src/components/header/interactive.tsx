import { useTranslations } from 'next-intl';

import { Button } from '#components/button';
import { ROUTE } from '#constants/routes';

const Interactive = () => {
  const button = useTranslations('Button');

  return (
    <div>
      <Button href={ROUTE.SIGN_IN}>{ button('sign_in') }</Button>
    </div>
  );
};

export { Interactive };
