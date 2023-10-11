import { FC } from 'react';

import { Pattern } from '#components/pattern';
import { TitleProps } from '#components/title/props';
import '#components/title/styles.scss';

const Title: FC<TitleProps> = ({ children, id }) => (
  <section className="evenia-title">
    <Pattern
      className="evenia-title__pattern"
      dotSize={2}
      id={id}
    />
    <div className="evenia-title__container">
      <h2 className="evenia-title__title">{ children }</h2>
    </div>
  </section>
);

export { Title };
