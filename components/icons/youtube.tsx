import React from 'react';
import { IconProps } from '../utils/interfaces';

export const Youtube = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg
      enable-background="new 0 0 24 24"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m.522 17.874c.49 1.738 1.989 2.056 2.089 2.117 2.467.672 16.295.674 18.799 0 1.715-.496 2.03-2.017 2.089-2.117.653-3.474.696-8.003-.03-11.945l.03.196c-.49-1.738-1.989-2.056-2.089-2.117-2.434-.661-16.298-.686-18.799 0-1.715.497-2.03 2.017-2.089 2.117-.699 3.651-.734 7.84 0 11.749zm9.086-2.223v-7.293l6.266 3.652z"
        fill={color}
      />
    </svg>
  );
};