import React from 'react';
import { IconProps } from '../utils/interfaces';

export const SilverBadgeIcon = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1663_29)">
        <path d="M69.1407 1H48.047L17.5781 45.5311H38.6718L69.1407 1Z" fill="#49789B" />
        <path d="M5.85938 1H26.953L57.4217 45.5311H36.328L5.85938 1Z" fill="#49789B" />
        <path
          d="M38.6719 24.4375C52.9687 24.4375 64.4532 35.9219 64.4532 50.2188C64.4532 64.5156 52.9687 76 38.6719 76C24.3751 76 12.8906 64.5156 12.8906 50.2188C12.8906 35.9219 24.3751 24.4375 38.6719 24.4375Z"
          fill="#E4E7E7"
        />
        <path
          d="M38.6719 31.4687C28.3595 31.4687 19.9219 39.9061 19.9219 50.2188C19.9219 60.5314 28.3593 68.9688 38.6719 68.9688C48.9846 68.9688 57.422 60.5314 57.422 50.2188C57.422 39.9061 48.9844 31.4687 38.6719 31.4687ZM38.6719 64.2812C30.9375 64.2812 24.6095 57.9529 24.6095 50.2188C24.6095 42.4846 30.9378 36.1563 38.6719 36.1563C46.4061 36.1563 52.7344 42.4846 52.7344 50.2188C52.7344 57.9529 46.4061 64.2812 38.6719 64.2812Z"
          fill="#CDCFCF"
        />
      </g>
      <defs>
        <clipPath id="clip0_1663_29">
          <rect width="75" height="75" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
