import { FC, PropsWithChildren } from 'react';

import { Footer } from '#components/footer';
import { Header } from '#components/header';

const BaseLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    { children }
    <Footer />
  </>
);

export default BaseLayout;
