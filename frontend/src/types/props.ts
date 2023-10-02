import { FormikErrors, FormikTouched } from 'formik';
import { ChangeEventHandler, PropsWithChildren } from 'react';

export interface FormContentProps<T> {
  errors: FormikErrors<T>;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  touched: FormikTouched<T>;
  values: T;
}

export interface LayoutProps extends PropsWithChildren {
  params: {
    locale: string;
  }
}

export type SignInFormProps = {
  [key in 'email' | 'password']: string;
};

export type SignUpFormProps = {
  [key in 'fullName' | 'repeatPassword']: string;
} & SignInFormProps;

export interface SubmitButtonProps {
  isSubmitting: boolean;
}
