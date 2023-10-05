import { FC, PropsWithChildren } from 'react';

const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <section className="evenia-hero">
    <div className="evenia-hero__container">
      { children }
    </div>
  </section>
);

export { Wrapper };
