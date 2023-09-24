import { FC, PropsWithChildren } from 'react';

import BaseLayout from '#layouts/base-layout';
import { BaseProps } from '#props/components';

type Props = BaseProps & PropsWithChildren;

const FullLayout: FC<Props> = ({ children, className = '' }) => (
  <BaseLayout>
    <main className={`evenia-container evenia-empty ${className}`}>
      { children }
    </main>
  </BaseLayout>
);

export default FullLayout;
