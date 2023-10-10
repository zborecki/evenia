import { useTranslations } from 'next-intl';

import { Button } from '#components/button';
import { SECTION } from '#constants/keys';

const Empty = () => {
  const button = useTranslations('Button');
  const t = useTranslations('My_tickets');

  return (
    <div className="evenia-tickets__empty">
      <h2 className="evenia-tickets__alert">{ t('no_tickets.title') }</h2>
      <p className="evenia-tickets__motto">{ t('no_tickets.description') }</p>
      <Button
        as="a"
        className="evenia-tickets__button"
        href={`/#${SECTION.ALL_EVENTS}`}
      >
        { button('explore_events') }
      </Button>
    </div>
  );
};

export { Empty };
