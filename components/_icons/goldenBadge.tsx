import React from 'react';
import { IconProps } from '../utils/interfaces';

export const GoldenBadgeIcon = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg width="65" height="74" viewBox="0 0 65 74" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M64.1407 0H43.047L12.5781 44.5311H33.6718L64.1407 0Z" fill="#49789B" />
      <path d="M0.859375 0H21.953L52.4217 44.5311H31.328L0.859375 0Z" fill="#49789B" />
      <path
        d="M33.6719 23.4375C47.9687 23.4375 59.4532 34.9219 59.4532 49.2188C59.4532 63.5156 47.9687 75 33.6719 75C19.3751 75 7.89062 63.5156 7.89062 49.2188C7.89062 34.9219 19.3751 23.4375 33.6719 23.4375Z"
        fill="#FFD500"
      />
      <path
        d="M33.6719 30.4687C23.3595 30.4687 14.9219 38.9061 14.9219 49.2188C14.9219 59.5314 23.3593 67.9688 33.6719 67.9688C43.9846 67.9688 52.422 59.5314 52.422 49.2188C52.422 38.9061 43.9844 30.4687 33.6719 30.4687ZM33.6719 63.2812C25.9375 63.2812 19.6095 56.9529 19.6095 49.2188C19.6095 41.4846 25.9378 35.1563 33.6719 35.1563C41.4061 35.1563 47.7344 41.4846 47.7344 49.2188C47.7344 56.9529 41.4061 63.2812 33.6719 63.2812Z"
        fill="#E6AF2E"
      />
    </svg>
  );
};