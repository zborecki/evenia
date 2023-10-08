import { FC } from 'react';

import { DateAndTime } from '#components/event-details/date-and-time';
import { Information } from '#components/event-details/information';
import { Location } from '#components/event-details/location';
import { EventDetailsProps } from '#components/event-details/props';
import '#components/event-details/styles.scss';

const EventDetails: FC<EventDetailsProps> = ({
  date, description, details
}) => (
  <section className="evenia-event-details">
    <div className="evenia-event-details__container">
      <Information description={description} details={details} />
      <div className="evenia-event-details__details">
        <DateAndTime date={date} />
        <Location />
      </div>
    </div>
  </section>
);

export { EventDetails };
