import { FC } from 'react';

import { SectionProps } from '#components/section/props';
import '#components/section/styles.scss';

const Section: FC<SectionProps> = ({ children, className = '', title }) => (
  <section className={`evenia-section ${className}`}>
    <div className="evenia-section__container">
      <h2 className="evenia-section__title">{ title }</h2>
      { children }
    </div>
  </section>
);

export { Section };
