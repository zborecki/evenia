'use client';

import { FC } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Partner } from '#components/partner';
import { PartnersCompaniesProps } from '#components/partners/props';
import { autoplay, breakpoints } from '#constants/partners';
import 'swiper/css';

const Slideshow: FC<PartnersCompaniesProps> = ({ partners }) => (
  <Swiper
    autoplay={autoplay}
    breakpoints={breakpoints}
    modules={[Autoplay]}
    slidesPerView={1}
  >
    {
      partners.map(({ companyName, logo, url }) => (
        <SwiperSlide key={`Partners-PartnerItem-${companyName}`}>
          <Partner
            logo={logo.url}
            name={companyName}
            url={url}
          />
        </SwiperSlide>
      ))
    }
  </Swiper>
);

export { Slideshow };
