import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '#components/button';
import { Detail } from '#components/checkout/details';
import { Divider } from '#components/divider';
import { getFees } from '#constants/checkout';
import { ROUTE } from '#constants/routes';
import { buyTicket } from '#requests/tickets';
import { eventSelector } from '#slices/event';
import { userSelector } from '#slices/user';

const Content = () => {
  const button = useTranslations('Button');
  const t = useTranslations('Checkout');
  const { data: user } = useSelector(userSelector);
  const { id, price, title } = useSelector(eventSelector);
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();

  const onClick = useCallback(() => {
    buyTicket(user.id, id).then(() => {
      setDisabled(true);
      router.push(ROUTE.MY_TICKETS);
    });
  }, [id, user.id]);

  return (
    <>
      <div className="evenia-checkout__details">
        <Detail price={price} title={title} />
        <Detail price={price} title={t('subtotal')} />
        <Detail price={getFees(price, 0.23)} title={t('fees')} />
        <Detail price={price + Number(getFees(price, 0.23))} title={t('total')} />
      </div>
      <Divider />
      <Button
        as="button" disabled={disabled}
        width="full"
        onClick={onClick}
      >
        { button('checkout') }
      </Button>
    </>
  );
};

export { Content };
