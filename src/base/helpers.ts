import { rgba } from 'polished';

export const lighten = (color: string, opacity: number) => {
  return rgba(color, opacity);
};

export const pxToRem = (pxValue: number) => {
  const rootFontSize = 10;
  return `${pxValue / rootFontSize}rem`;
};
