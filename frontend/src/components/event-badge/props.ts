import { PropsWithChildren } from 'react';

export interface EventBadgeProps extends PropsWithChildren {
  icon: JSX.Element;
  title: string;
}
