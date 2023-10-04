import { FC } from 'react';

import { Pattern } from '#components/pattern';
import { SectionProps } from '#components/section/props';
import '#components/section/styles.scss';

const Section: FC<SectionProps> = ({
  children,
  className = '',
  density,
  dotSize,
  pattern = false,
  title
}) => (
  <section className={`evenia-section ${className}`}>
    {
      pattern && (
        <Pattern
          className="evenia-section__pattern"
          density={density}
          dotSize={dotSize}
          id={`${className}-dots`}
        />
      )
    }
    <div className="evenia-section__container">
      <h2 className="evenia-section__title">{ title }</h2>
      { children }
    </div>
  </section>
);

export { Section };
