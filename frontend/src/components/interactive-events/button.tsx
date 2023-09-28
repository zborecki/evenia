import { useTranslations } from 'next-intl';
import { FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '#components/button';
import { AppDispatch } from '#libraries/redux';
import { UPDATE_EVENTS } from '#reducers/events-reducers';
import { tabsSelector } from '#slices/tabs-slice';

interface Props {
  initialOffset: number;
}

const SeeMoreButton: FC<Props> = ({ initialOffset }) => {
  const dispatch = useDispatch<AppDispatch>();
  const common = useTranslations('Common');
  const { categoryName } = useSelector(tabsSelector);
  const [offset, setOffset] = useState<number>(2 * initialOffset);

  const onClick = useCallback(() => {
    dispatch(UPDATE_EVENTS({ categoryName, offset }));
    setOffset((previousOffset) => previousOffset + initialOffset);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName, dispatch, offset]);

  return (
    <Button
      as="button"
      className="evenia-interactive-events__button"
      onClick={onClick}
    >
      { common('see_more') }
    </Button>
  );
};

export { SeeMoreButton };
