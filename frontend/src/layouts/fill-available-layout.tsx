import { FC, PropsWithChildren } from 'react';

import BaseLayout from '#layouts/base-layout';
import { BaseProps } from '#types/common';

const FillAvailableLayout: FC<BaseProps & PropsWithChildren> = ({
  children,
  className = ''
}) => (
  <BaseLayout>
    <main className={`evenia-container evenia-empty ${className}`}>
      { children }
    </main>
  </BaseLayout>
);

export default FillAvailableLayout;
