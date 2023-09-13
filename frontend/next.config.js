/** @type {import('next').NextConfig} */

const path = require('path');

const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

module.exports = withNextIntl({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
});
