import { FormikSharedConfig } from 'formik';

import { SignUpFormProps } from '#props/components';

export const commonSettings: FormikSharedConfig = {
  validateOnBlur: false,
  validateOnChange: false
};

export const signUpInitialValues: SignUpFormProps = {
  email: '',
  fullName: '',
  password: '',
  repeatPassword: ''
};
