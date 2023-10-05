import { FC } from 'react';

import { HeroPanelProps } from './props';

import { Button } from '#components/button';

const Panel: FC<HeroPanelProps> = ({ button, description, title }) => (
  <div className="evenia-hero__panel">
    <h1 className="evenia-hero__title">{ title }</h1>
    <p className="evenia-hero__description">{ description }</p>
    <Button as="a" href="#all-events">
      { button }
    </Button>
  </div>
);

export { Panel };
