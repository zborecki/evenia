import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Button } from '#components/button';
import { ROUTE } from '#constants/routes';
import { FormButtonsProps } from '#props/components';

const Buttons: FC<FormButtonsProps> = ({ isSubmitting }) => {
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
        { button('sign_in') }
      </Button>
      <Button
        as="a"
        href={ROUTE.SIGN_UP}
        variant="outlined"
        width="full"
      >
        { button('create_account') }
      </Button>
    </>
  );
};

export { Buttons };