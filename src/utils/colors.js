import {
  darken, lighten, saturate, desaturate,
} from 'unitransform';

export const red = `#c10000`;
export const redDark = saturate(darken(red, 12), 5);
export const redLight = desaturate(lighten(red, 24), 10);
export const redExtraLight = desaturate(lighten(red, 52), 25);
