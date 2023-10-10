import { FC, PropsWithChildren } from 'react';

const Grid: FC<PropsWithChildren> = ({ children }) => (
  <ul className="evenia-tickets__grid">
    { children }
  </ul>
);

export { Grid };
