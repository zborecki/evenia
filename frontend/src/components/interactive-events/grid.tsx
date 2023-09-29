import { FC, PropsWithChildren } from 'react';

const Grid: FC<PropsWithChildren> = ({ children }) => (
  <ul className="evenia-interactive-events">
    { children }
  </ul>
);

export { Grid };
