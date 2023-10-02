'use client';

import { FC } from 'react';

import { SeeMoreButton } from '#components/interactive-events/button';
import { Cards } from '#components/interactive-events/cards';
import { InteractiveEventsProps } from '#components/interactive-events/props';
import '#components/interactive-events/styles.scss';

const InteractiveEvents: FC<InteractiveEventsProps> = ({ initializeEvents }) => (
  <>
    <Cards initializeEvents={initializeEvents} />
    <SeeMoreButton />
  </>
);

export { InteractiveEvents };
