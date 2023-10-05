import { IImage } from '#types/common';

export type HeroIllustrationProps = IImage & {
  [prop in 'height' | 'width']: number;
};

export type HeroPanelProps = {
  [prop in 'button' | 'description' | 'title']: string;
};
