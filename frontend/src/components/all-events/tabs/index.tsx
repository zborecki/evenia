'use client';

import { Tab } from '@headlessui/react';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { SET_CATEGORY_NAME } from '#slices/paginated-events';
import { GetCategoriesResponse } from '#types/responses';

import '#components/all-events/tabs/styles.scss';

const Tabs: FC<GetCategoriesResponse> = ({ categories }) => {
  const dispatch = useDispatch();
  const common = useTranslations('Common');

  return (
    <Tab.Group defaultIndex={0}>
      <Tab.List className="evenia-tabs">
        <Tab
          className="evenia-tabs__tab"
          onClick={() => dispatch(SET_CATEGORY_NAME({ categoryName: '' }))}
        >
          { common('all') }
        </Tab>
        {
          categories.map(({ name }) => (
            <Tab
              className="evenia-tabs__tab"
              key={`Tabs-${name}`}
              onClick={() => dispatch(SET_CATEGORY_NAME({ categoryName: name }))}
            >
              { name }
            </Tab>
          ))
        }
      </Tab.List>
    </Tab.Group>
  );
};

export { Tabs };
