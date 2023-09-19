'use client';

import { FC, cloneElement, useMemo } from 'react';

import { TooltipProps } from '#props/components';
import '#components/tooltip/styles.scss';

const Tooltip: FC<TooltipProps> = ({
  children,
  position = 'right',
  title
}) => {
  const childrenWithTooltip = useMemo(() => cloneElement(children, {
    'aria-label': title,
    className: `${children.props.className} evenia-tooltip evenia-tooltip--${position}`
  }), [children, position, title]);

  return childrenWithTooltip;
};

export { Tooltip };
