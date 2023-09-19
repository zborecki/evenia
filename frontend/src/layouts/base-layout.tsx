import { FC, PropsWithChildren } from 'react';

import { Header } from '#components/header';

const BaseLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    { children }
  </>
);

export default BaseLayout;
