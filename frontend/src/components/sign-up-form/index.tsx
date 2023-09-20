'use client';

import { useFormik } from 'formik';

import { Buttons } from '#components/sign-up-form/buttons';
import { Fields } from '#components/sign-up-form/fields';
import { commonSettings, signUpInitialValues } from '#constants/form';
import { signUpValidationSchema } from '#constants/schemas';
import { SignUpFormProps } from '#props/components';

const SignUpForm = () => {
  const {
    errors, handleChange, handleSubmit, isSubmitting, touched, values
  } = useFormik<SignUpFormProps>({
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

export { SignUpForm };
