import { FormikErrors, FormikTouched } from 'formik';
import {
  ChangeEventHandler, HTMLInputTypeAttribute, HTMLProps, PropsWithChildren, ReactElement
} from 'react';

import { CategoriesResponse } from './services';

import {
  Details, EventCard, Link, ProtectedLink
} from '#props/common';

export type AuthProps = Details & PropsWithChildren;

export interface BaseProps {
  className?: string;
}

export type ButtonProps = {
  as?: 'a' | 'button';
  size?: 'medium';
  variant?: 'contained' | 'outlined';
  width?: 'full' | 'standard';
} & BaseProps & HTMLProps<HTMLButtonElement> & Link;

export interface FormButtonsProps {
  isSubmitting: boolean;
}

export interface FooterLinksProps {
  links: ProtectedLink[];
}

export interface FormContentProps<T> {
  errors: FormikErrors<T>;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  touched: FormikTouched<T>;
  values: T;
}

export interface InputButtonProps {
  errors?: string;
  onClick: () => void;
}

export interface InputProps {
  errors?: string;
  id: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  touched?: boolean;
  type?: HTMLInputTypeAttribute;
  value?: number | string;
}

export interface InteractiveEventsProps {
  endpoint?: string;
  initialEvents: EventCard[];
}

export interface InteractiveSEOProps {
  ariaLabel?: string;
}

export interface LayoutProps extends PropsWithChildren {
  params: {
    locale: string;
  }
}

export interface SectionProps extends BaseProps, PropsWithChildren {
  title: string;
}

export type SignInFormProps = {
  [key in 'email' | 'password']: string;
};

export type SignUpFormProps = {
  [key in 'fullName' | 'repeatPassword']: string;
} & SignInFormProps;

export interface TabsProps extends CategoriesResponse {

}

export interface TooltipProps {
  children: ReactElement<any, any>;
  position?: 'right';
  title: string;
}
