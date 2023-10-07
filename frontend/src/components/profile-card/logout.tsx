import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { DropdownItem } from '#components/dropdown-item';
import { ProfileCardLogoutProps } from '#components/profile-card/props';

const Logout: FC<ProfileCardLogoutProps> = ({ handleLogout }) => {
  const button = useTranslations('Button');

  return (
    <DropdownItem
      as="button"
      type="button"
      onClick={handleLogout}
    >
      { button('logout') }
    </DropdownItem>
  );
};

export { Logout };
