/** @type {import('next').NextConfig} */

import withPlaiceholder from '@plaiceholder/next';
import withNextIntl from 'next-intl/plugin';

const nextConfig = {
  images: {
    domains: [
      'media.graphassets.com'
    ]
  }
};

export default withNextIntl('./src/i18n.ts')(withPlaiceholder(nextConfig));
