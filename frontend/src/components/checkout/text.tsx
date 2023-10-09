import { FC, PropsWithChildren } from 'react';

const Text: FC<PropsWithChildren> = ({ children }) => (
  <p className="evenia-checkout__paragraph">
    { children }
  </p>
);

export { Text };
