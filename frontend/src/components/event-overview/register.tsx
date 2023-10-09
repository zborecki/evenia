'use client';

import { useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '#components/button';
import { Checkout } from '#components/checkout';
import { userSelector } from '#slices/user';

const Register = () => {
  const t = useTranslations('Button');
  const { isLoggedIn } = useSelector(userSelector);
  const [isOpen, setIsOpen] = useState(false);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return isLoggedIn ? (
    <>
      <Button
        as="button"
        className="evenia-event-overview__register-button"
        onClick={() => setIsOpen(true)}
      >
        { t('register') }
      </Button>
      <Checkout isOpen={isOpen} onClose={onClose} />
    </>
  ) : undefined;
};

export { Register };
