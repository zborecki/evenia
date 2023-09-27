import Link from 'next/link';
import { FC } from 'react';

type Props = {
  [key in 'author' | 'date' | 'slug' | 'title']: string;
};

const Content: FC<Props> = ({
  author, date, slug, title
}) => (
  <div className="evenia-event-card__content">
    <p className="evenia-event-card__date">{ date }</p>
    <Link
      className="evenia-event-card__link"
      href={slug}
      prefetch={false}
    >
      <h3 className="evenia-event-card__title">{ title }</h3>
    </Link>
    <p className="evenia-event-card__author">{ author }</p>
  </div>
);

export { Content };
