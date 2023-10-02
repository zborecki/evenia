import { FC } from 'react';

import { AuthWrapperProps } from '#components/auth-wrapper/props';
import '#components/auth-wrapper/styles.scss';

const AuthWrapper: FC<AuthWrapperProps> = ({ children, description, title }) => (
  <main className="evenia-auth">
    <div className="evenia-auth__container">
      <div className="evenia-auth__header">
        <h2 className="evenia-auth__title">{ title }</h2>
        <p className="evenia-auth__description">{ description }</p>
      </div>
      { children }
    </div>
  </main>
);

export { AuthWrapper };
