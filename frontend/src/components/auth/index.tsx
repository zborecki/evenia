import { FC } from 'react';

import { AuthProps } from '#props/components';
import '#components/auth/styles.scss';

const Auth: FC<AuthProps> = ({ children, description, title }) => (
  <main className="evenia-auth">
    <form className="evenia-auth__container">
      <div className="evenia-auth__header">
        <h2 className="evenia-auth__title">{ title }</h2>
        <p className="evenia-auth__description">{ description }</p>
      </div>
      { children }
    </form>
  </main>
);

export { Auth };
