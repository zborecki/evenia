'use client';

import { useLazyQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';

import { Buttons } from '#components/sign-in-form/buttons';
import { Fields } from '#components/sign-in-form/fields';
import { Toast } from '#components/toast';
import { commonSettings, signInInitialValues } from '#constants/form';
import { COOKIE } from '#constants/keys';
import { ROUTE } from '#constants/routes';
import { signInValidationSchema } from '#constants/schemas';
import { GET_LOGGED_IN_USER_QUERY } from '#queries/user';
import { SignInFormProps } from '#types/props';
import { GetAuthorizedUserResponse } from '#types/responses';

const SignInForm = () => {
  const router = useRouter();
  const t = useTranslations('Sign_in');
  const [, setCookie] = useCookies([COOKIE.AUTH]);
  const [logIn, { data: response }] = useLazyQuery<GetAuthorizedUserResponse>(
    GET_LOGGED_IN_USER_QUERY
  );

  const {
    errors, handleChange, handleSubmit, isSubmitting, touched, values
  } = useFormik<SignInFormProps>({
    ...commonSettings,
    initialValues: signInInitialValues,
    onSubmit: ({ email, password }) => {
      /*
        Due to the long waiting time from the Hygraph server and the lack of an appropriate request,
        the login algorithm was implemented as follows.
      */
      toast.info(t('info'), { autoClose: 5000 });
      logIn({ variables: { email, password } }).then(({ data }) => {
        if (data && data?.organizersConnection.edges.length > 0) {
          const { id } = data.organizersConnection.edges[0].node;
          setCookie(COOKIE.AUTH, id);
          toast.success(t('success'));
        } else {
          toast.error(t('error'));
        }
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
    },
    validationSchema: signInValidationSchema
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (response && response?.organizersConnection.edges.length > 0) {
        router.push(ROUTE.HOME);
      }
    }, 3500);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  return (
    <form onSubmit={handleSubmit}>
      <Toast />
      <Fields
        errors={errors}
        handleChange={handleChange}
        touched={touched}
        values={values}
      />
      <Buttons isSubmitting={isSubmitting} />
    </form>
  );
};

export { SignInForm };
