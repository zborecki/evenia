import { Menu, Transition } from '@headlessui/react';
import { FC, Fragment } from 'react';

import { DropdownProps } from '#components/dropdown/props';
import '#components/dropdown/styles.scss';

const Dropdown: FC<DropdownProps> = ({
  button = 'Dropdown',
  children
}) => (
  <Menu as="div" className="evenia-dropdown">
    <Menu.Button className="evenia-dropdown__button">
      { button }
    </Menu.Button>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items as="ul" className="evenia-dropdown__list">
        { children }
      </Menu.Items>
    </Transition>
  </Menu>
);

export { Dropdown };
