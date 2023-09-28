'use client';

import { useSelector } from 'react-redux';

import { InteractiveEvents } from '#components/interactive-events';
import { tabsSelector } from '#slices/tabs-slice';

const OFFSET = 4;
const Events = () => {
  const { categoryName } = useSelector(tabsSelector);

  return <InteractiveEvents categoryName={categoryName} offset={OFFSET} />;
};

export { Events };
