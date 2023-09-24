import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import { Button } from '#components/button';
import { ROUTE } from '#constants/routes';
import FullLayout from '#layouts/full-layout';
import '#theme/terms-of-service.scss';

export const metadata: Metadata = {
  title: 'Evenia - Terms of service'
};

const Page = () => {
  const common = useTranslations('Common');
  const t = useTranslations('Terms_of_service');

  return (
    <FullLayout className="evenia-terms-of-service">
      <Button
        className="evenia-terms-of-service__button"
        href={ROUTE.HOME}
        variant="outlined"
      >
        { common('return_home') }
      </Button>
      <div className="evenia-terms-of-service__content">
        <h2 className="evenia-terms-of-service__title">{ t('title') }</h2>
        <p className="evenia-terms-of-service__description">{ t('description') }</p>
      </div>
    </FullLayout>
  );
};

export default Page;
