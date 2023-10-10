import { FC, PropsWithChildren } from 'react';

const Container: FC<PropsWithChildren> = ({ children }) => (
  <section className="evenia-tickets">
    <main className="evenia-tickets__container">
      { children }
    </main>
  </section>
);

export { Container };
