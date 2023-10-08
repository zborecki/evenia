import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { CheckoutDetailProps } from '#components/checkout/props';
import { Text } from '#components/checkout/text';

const Detail: FC<CheckoutDetailProps> = ({ price, title }) => {
  const t = useTranslations('Event');

  return (
    <div className="evenia-checkout__detail">
      <Text>{ title }</Text>
      <Text>{ t('price', { value: price ?? '0' }) }</Text>
    </div>
  );
};

export { Detail };
