import { FormikSharedConfig } from 'formik';

import { SignInFormProps, SignUpFormProps } from '#types/props';

export const commonSettings: FormikSharedConfig = {
  validateOnBlur: false,
  validateOnChange: false
};

export const signInInitialValues: SignInFormProps = {
  email: '',
  password: ''
};

export const signUpInitialValues: SignUpFormProps = {
  email: '',
  fullName: '',
  password: '',
  repeatPassword: ''
};
