import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Button } from '#components/button';
import { SignUpFormButtons } from '#props/components';

const Buttons: FC<SignUpFormButtons> = ({ isSubmitting }) => {
  const button = useTranslations('Button');

  return (
    <>
      <Button
        as="button"
        className="mb-6"
        disabled={isSubmitting}
        type="submit"
        width="full"
      >
        { button('create_account') }
      </Button>
      <Button
        as="a"
        href="/"
        variant="outlined"
        width="full"
      >
        { button('sign_in') }
      </Button>
    </>
  );
};

export { Buttons };
