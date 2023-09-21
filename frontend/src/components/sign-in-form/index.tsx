'use client';

import { useFormik } from 'formik';

import { Buttons } from '#components/sign-in-form/buttons';
import { Fields } from '#components/sign-in-form/fields';
import { commonSettings, signUpInitialValues } from '#constants/form';
import { signUpValidationSchema } from '#constants/schemas';
import { SignInFormProps } from '#props/components';

const SignInForm = () => {
  const {
    errors, handleChange, handleSubmit, isSubmitting, touched, values
  } = useFormik<SignInFormProps>({
    ...commonSettings,
    initialValues: signUpInitialValues,
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: signUpValidationSchema
  });

  return (
    <form onSubmit={handleSubmit}>
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
