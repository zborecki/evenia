import { useTranslations } from 'next-intl';

import { Input } from '#components/input';
import { FormContentProps, SignInFormProps } from '#props/components';

const Fields = ({
  errors, handleChange, touched, values
}: FormContentProps<SignInFormProps>) => {
  const placeholder = useTranslations('Placeholder');

  return (
    <>
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
    </>
  );
};

export { Fields };
