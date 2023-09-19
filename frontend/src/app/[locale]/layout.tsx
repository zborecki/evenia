import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { notFound } from 'next/navigation';
import { useLocale } from 'next-intl';
import { FC } from 'react';
import 'normalize.css';
import '#theme/global.scss';

import { LayoutProps } from '#props/components';
import { ReduxProvider } from '#providers/redux-provider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Evenia'
};

const PrimaryLayout: FC<LayoutProps> = ({ children, params }) => {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <ReduxProvider>
          { children }
        </ReduxProvider>
      </body>
    </html>
  );
};

export default PrimaryLayout;
