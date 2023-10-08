import { useTranslations } from 'next-intl';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '#components/button';
import { Grid } from '#components/interactive-events/grid';
import { Loader } from '#components/loader';
import { AppDispatch } from '#libraries/redux';
import { GET_PAGINATED_EVENTS } from '#reducers/paginated-events';
import { EventCardSkeletons } from '#skeletons/event-cards';
import { NEXT_PAGE, paginatedEventsSelector } from '#slices/paginated-events';

const SeeMoreButton = () => {
  const {
    categoryName, hasNextPage, isLoading, offset
  } = useSelector(paginatedEventsSelector);
  const common = useTranslations('Common');
  const dispatch = useDispatch<AppDispatch>();

  const handleOtherEvents = useCallback(() => {
    dispatch(GET_PAGINATED_EVENTS({
      categoryName,
      first: offset.next,
      skip: offset.next
    }));
    dispatch(NEXT_PAGE());
  }, [categoryName, offset]);

  return isLoading ? (
    <>
      <Grid>
        <EventCardSkeletons count={offset.initial} />
      </Grid>
      <Loader className="mt-10" />
    </>
  ) : (
    <Button
      as="button"
      className="evenia-interactive-events__button"
      hidden={!hasNextPage}
      onClick={handleOtherEvents}
    >
      { common('see_more') }
    </Button>
  );
};

export { SeeMoreButton };
