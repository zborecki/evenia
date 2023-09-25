/** @type {import('next').NextConfig} */

const path = require('path');

const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

module.exports = withNextIntl({
  images: {
    domains: [
      'media.graphassets.com'
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
});
