import * as Yup from 'yup';

const baseValidationSchema = {
  email: Yup.string().email('invalid').required('required'),
  password: Yup.string()
    .min(3, 'too_short')
    .max(32, 'too_long')
    .required('required')
};

export const signInValidationSchema = Yup.object().shape({ ...baseValidationSchema });

export const signUpValidationSchema = Yup.object().shape({
  ...baseValidationSchema,
  fullName: Yup.string()
    .min(5, 'too_short')
    .max(32, 'too_long')
    .required('required'),
  repeatPassword: Yup.string()
    .required('required')
    .oneOf([Yup.ref('password')], 'invalid')
});
