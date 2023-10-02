import { FC } from 'react';

import { BaseProps } from '#types/common';

const ErrorIcon: FC<BaseProps> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    height="25"
    viewBox="0 0 24 25"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M11 8.5C11 7.948 11.448 7.5 12 7.5C12.552 7.5 13 7.948 13 8.5C13 9.052 12.552 9.5 12 9.5C11.448 9.5 11 9.052 11 8.5ZM11 11.5C11 10.948 11.448 10.5 12 10.5C12.552 10.5 13 10.948 13 11.5V16.5C13 17.052 12.552 17.5 12 17.5C11.448 17.5 11 17.052 11 16.5V11.5ZM12 20.5C7.589 20.5 4 16.911 4 12.5C4 8.089 7.589 4.5 12 4.5C16.411 4.5 20 8.089 20 12.5C20 16.911 16.411 20.5 12 20.5ZM12 2.5C6.477 2.5 2 6.977 2 12.5C2 18.023 6.477 22.5 12 22.5C17.522 22.5 22 18.023 22 12.5C22 6.977 17.522 2.5 12 2.5Z"
      fill="black"
      fillRule="evenodd"
    />
    <mask
      height="21"
      id="mask0_438_4177"
      maskUnits="userSpaceOnUse"
      style={{ maskType: 'luminance' }}
      width="20" x="2"
      y="2"
    >
      <path
        clipRule="evenodd"
        d="M11 8.5C11 7.948 11.448 7.5 12 7.5C12.552 7.5 13 7.948 13 8.5C13 9.052 12.552 9.5 12 9.5C11.448 9.5 11 9.052 11 8.5ZM11 11.5C11 10.948 11.448 10.5 12 10.5C12.552 10.5 13 10.948 13 11.5V16.5C13 17.052 12.552 17.5 12 17.5C11.448 17.5 11 17.052 11 16.5V11.5ZM12 20.5C7.589 20.5 4 16.911 4 12.5C4 8.089 7.589 4.5 12 4.5C16.411 4.5 20 8.089 20 12.5C20 16.911 16.411 20.5 12 20.5ZM12 2.5C6.477 2.5 2 6.977 2 12.5C2 18.023 6.477 22.5 12 22.5C17.522 22.5 22 18.023 22 12.5C22 6.977 17.522 2.5 12 2.5Z"
        fill="white"
        fillRule="evenodd"
      />
    </mask>
    <g mask="url(#mask0_438_4177)">
      <rect
        fill="black"
        height="24"
        width="24"
        y="0.5"
      />
    </g>
  </svg>
);

export { ErrorIcon };
