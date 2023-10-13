'use client';

import Image from 'next/image';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Panel } from '#components/event-overview/panel';
import { EventOverviewProps } from '#components/event-overview/props';
import { AppDispatch } from '#libraries/redux';
import { SET_EVENT } from '#slices/event';
import '#components/event-overview/styles.scss';

const EventOverview: FC<EventOverviewProps> = ({
  author, date, image, price, title
}) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(SET_EVENT({
      image,
      price,
      title
    }));
  }, []);

  return (
    <section className="evenia-event-overview">
      <div className="evenia-event-overview__container">
        <Image
          alt={image.alt ?? ''}
          className="evenia-event-overview__image"
          height={663}
          src={image.src ?? '/event.webp'}
          width={742}
        />
        <Panel
          author={author}
          date={date}
          price={price}
          title={title}
        />
      </div>
    </section>
  );
};

export { EventOverview };
