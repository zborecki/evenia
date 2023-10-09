import { FC, PropsWithChildren } from 'react';

const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className="evenia-checkout__wrapper">
    <div className="evenia-checkout__position">
      { children }
    </div>
  </div>
);

export { Wrapper };
