import { useTranslations } from 'next-intl';

import { Button } from '#components/button';

const Interactive = () => {
  const button = useTranslations('Button');

  return (
    <div>
      <Button href="/">{ button('sign_in') }</Button>
    </div>
  );
};

export { Interactive };
