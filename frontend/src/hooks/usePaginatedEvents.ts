'use client';

import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { IPaginatedEvents } from '#/types/hooks';
import { AppDispatch } from '#libraries/redux';
import { GET_PAGINATED_EVENTS } from '#reducers/paginated-events';
import { CLEAR_EVENTS, SET_OFFSET } from '#slices/paginated-events';

export const usePaginatedEvents = ({ categoryName = '', offset }: IPaginatedEvents) => {
  const dispatch = useDispatch<AppDispatch>();

  const initializeEvents = useCallback(() => {
    dispatch(CLEAR_EVENTS());
    dispatch(SET_OFFSET({ offset }));
    dispatch(GET_PAGINATED_EVENTS({
      categoryName,
      first: offset,
      skip: 0
    }));
  }, [categoryName]);

  return {
    initializeEvents
  };
};
