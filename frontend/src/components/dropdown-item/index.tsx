import { Menu } from '@headlessui/react';
import { FC } from 'react';

import { DropdownItemProps } from '#components/dropdown-item/props';

const DropdownItem: FC<DropdownItemProps> = ({
  as = 'a',
  children,
  href,
  ...rest
}) => {
  const Component = as === 'a' ? 'a' : 'button';

  return (
    <Menu.Item as="li" className="evenia-dropdown__item">
      <Component {...(as === 'a' ? { href } : { ...rest })}>
        { children }
      </Component>
    </Menu.Item>
  );
};

export { DropdownItem };
