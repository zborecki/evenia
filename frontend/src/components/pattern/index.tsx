import { FC } from 'react';

import { PatternProps } from './props';

const Pattern: FC<PatternProps> = ({
  className, density = 20, dotSize = 4, id = 'dots'
}) => (
  <svg
    className={className}
    height="100%"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <pattern
      height={density}
      id={id}
      patternUnits="userSpaceOnUse"
      width={density}
    >
      <circle
        cx={density / 2}
        cy={density / 2}
        r={dotSize}
      />
    </pattern>
    <rect
      fill={`url(#${id})`}
      height="100%"
      width="100%"
    />
  </svg>
);

export { Pattern };
