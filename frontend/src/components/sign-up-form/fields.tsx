import { useTranslations } from 'next-intl';

import { Input } from '#components/input';
import { FormContentProps, SignUpFormProps } from '#types/props';

const Fields = ({
  errors, handleChange, touched, values
}: FormContentProps<SignUpFormProps>) => {
  const placeholder = useTranslations('Placeholder');

  return (
    <>
      <Input
        errors={errors.fullName}
        id="fullName"
        placeholder={placeholder('full_name')}
        touched={touched.fullName}
        value={values.fullName}
        onChange={handleChange}
      />
      <Input
        errors={errors.email}
        id="email"
        placeholder={placeholder('e_mail')}
        touched={touched.email}
        type="email"
        value={values.email}
        onChange={handleChange}
      />
      <Input
        errors={errors.password}
        id="password"
        placeholder={placeholder('password')}
        touched={touched.password}
        type="password"
        value={values.password}
        onChange={handleChange}
      />
      <Input
        errors={errors.repeatPassword}
        id="repeatPassword"
        placeholder={placeholder('confirm_password')}
        touched={touched.repeatPassword}
        type="password"
        value={values.repeatPassword}
        onChange={handleChange}
      />
    </>
  );
};

export { Fields };
