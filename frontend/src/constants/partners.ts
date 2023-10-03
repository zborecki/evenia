import { SwiperAutoplay, SwiperBreakpoints } from '#types/swiper';

export const autoplay: SwiperAutoplay = {
  delay: 2000,
  pauseOnMouseEnter: true
};

export const breakpoints: SwiperBreakpoints = {
  429: {
    slidesPerView: 2,
    spaceBetween: 16
  },
  576: {
    slidesPerView: 3,
    spaceBetween: 16
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 16
  },
  992: {
    slidesPerView: 5,
    spaceBetween: 16
  },
  1200: {
    slidesPerView: 6,
    spaceBetween: 16
  }
};
