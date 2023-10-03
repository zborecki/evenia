import { AutoplayOptions, SwiperOptions } from 'swiper/types';

export type SwiperAutoplay = AutoplayOptions | boolean;

export interface SwiperBreakpoints {
  [width: number]: SwiperOptions;
  [ratio: string]: SwiperOptions;
}
