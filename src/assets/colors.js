import { darken, saturate } from 'unitransform';

export const red = '#c10000';
export const redDark = saturate(darken(red, 12), 5);
