import { useTranslations } from 'next-intl';
import { useSelector } from 'react-redux';

import { Button } from '#components/button';
import { Detail } from '#components/checkout/details';
import { Divider } from '#components/divider';
import { getFees } from '#constants/checkout';
import { eventSelector } from '#slices/event';

const Content = () => {
  const button = useTranslations('Button');
  const t = useTranslations('Checkout');
  const { price, title } = useSelector(eventSelector);

  return (
    <>
      <div className="evenia-checkout__details">
        <Detail price={price} title={title} />
        <Detail price={price} title={t('subtotal')} />
        <Detail price={getFees(price, 0.23)} title={t('fees')} />
        <Detail price={price + Number(getFees(price, 0.23))} title={t('total')} />
      </div>
      <Divider />
      <Button as="button" width="full">{ button('checkout') }</Button>
    </>
  );
};

export { Content };
