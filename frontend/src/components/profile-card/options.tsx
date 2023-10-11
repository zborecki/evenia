import { useCallback } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';

import { Dropdown } from '#components/dropdown';
import { DropdownItem } from '#components/dropdown-item';
import { Logout } from '#components/profile-card/logout';
import { COOKIE } from '#constants/keys';
import { ROUTE } from '#constants/routes';
import { AppDispatch } from '#libraries/redux';
import { RESET_USER } from '#slices/user';
import { ChevronDownIcon } from '#svg/chevron-down-icon';

const Options = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [, , removeCookie] = useCookies([COOKIE.AUTH]);

  const handleLogout = useCallback(() => {
    dispatch(RESET_USER());
    removeCookie(COOKIE.AUTH, { path: ROUTE.HOME });
  }, [removeCookie]);

  return (
    <Dropdown button={<ChevronDownIcon />}>
      <DropdownItem as="a" href={ROUTE.MY_TICKETS}>My Tickets</DropdownItem>
      <Logout handleLogout={handleLogout} />
    </Dropdown>
  );
};

export { Options };
