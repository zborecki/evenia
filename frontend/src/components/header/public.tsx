import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { HeaderPublicProps } from './props';

import { Button } from '#components/button';
import { Loader } from '#components/loader';
import { ROUTE } from '#constants/routes';

const Public: FC<HeaderPublicProps> = ({ isLoading }) => {
  const button = useTranslations('Button');

  return (
    <div className="evenia-header__public">
      <Button href={ROUTE.SIGN_IN}>{ button('sign_in') }</Button>
      { isLoading && <Loader /> }
    </div>
  );
};

export { Public };
