'use client';

import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';

import { Buttons } from '#components/sign-up-form/buttons';
import { Fields } from '#components/sign-up-form/fields';
import { Toast } from '#components/toast';
import { commonSettings, signUpInitialValues } from '#constants/form';
import { COOKIE } from '#constants/keys';
import { ROUTE } from '#constants/routes';
import { signUpValidationSchema } from '#constants/schemas';
import { POST_USER_QUERY } from '#queries/user';
import { SignUpFormProps } from '#types/props';
import { PostUserResponse } from '#types/responses';

const SignUpForm = () => {
  const router = useRouter();
  const common = useTranslations('Common');
  const t = useTranslations('Sign_up');
  const [, setCookie] = useCookies([COOKIE.AUTH]);
  const [createOrganizer, { data }] = useMutation<PostUserResponse>(POST_USER_QUERY);
  const {
    errors, handleChange, handleSubmit, isSubmitting, touched, values
  } = useFormik<SignUpFormProps>({
    ...commonSettings,
    initialValues: signUpInitialValues,
    onSubmit: ({ email, fullName, password }) => {
      toast.promise(
        createOrganizer({
          variables: {
            email,
            fullName,
            password
          }
        }),
        {
          pending: common('please_wait'),
          success: t('success'),
          error: t('error')
        }
      );
    },
    validationSchema: signUpValidationSchema
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (data) {
        setCookie(COOKIE.AUTH, data.createOrganizer.id);
        router.push(ROUTE.HOME);
      }
    }, 3500);

    return () => clearInterval(timer);
  }, [data]);

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

export { SignUpForm };
