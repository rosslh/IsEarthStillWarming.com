import { darken, saturate } from "unitransform";

export const red = "#b51a16";
export const redDark = saturate(darken(red, 12), 5);
