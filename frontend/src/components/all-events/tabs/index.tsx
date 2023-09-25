'use client';

import { Tab } from '@headlessui/react';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { TabsProps } from '#props/components';
import { SET_CATEGORY_ID } from '#slices/tabs-slice';

import '#components/all-events/tabs/styles.scss';

const Tabs: FC<TabsProps> = ({ categories }) => {
  const dispatch = useDispatch();
  const common = useTranslations('Common');

  return (
    <Tab.Group
      defaultIndex={0}
      onChange={
        (categoryId: number) => dispatch(SET_CATEGORY_ID({ categoryId }))
      }
    >
      <Tab.List className="evenia-tabs">
        <Tab className="evenia-tabs__tab">{ common('all') }</Tab>
        {
          categories.map(({ name }) => (
            <Tab className="evenia-tabs__tab" key={`Tabs-${name}`}>{ name }</Tab>
          ))
        }
      </Tab.List>
    </Tab.Group>
  );
};

export { Tabs };
