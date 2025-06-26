import { type Palette, type ThemeOptions } from '@mui/material';
import { type CSSProperties } from 'react';

export const px = (n: number): string => `${n}px`;
export const rem = (n: number): string => `${n}rem`;

export const FontName = 'DIN Next W01';
export const FontFamily = `"${FontName}", Helvetica, Arial, sans-serif`;

export const FontSize = {
  small: rem(0.875),
  medium: rem(1),
  large: rem(1.125),
  icon: rem(1.2),
};

export const FontWeight = {
  normal: 'normal',
  bold: 'bold',
};

const commonHStyle = (palette: Palette): Partial<CSSProperties> => ({
  margin: 0,
  whiteSpace: 'pre-line',
  fontFamily: FontFamily,
  fontWeight: FontWeight.bold,
  color: palette.text.primary,
});

const h1 = (palette: Palette): Partial<CSSProperties> => ({
  ...commonHStyle(palette),
  fontSize: '22px',
  lineHeight: '26px',
});
const h2 = (palette: Palette): Partial<CSSProperties> => ({
  ...commonHStyle(palette),
  fontSize: '20px',
  lineHeight: '24px',
});
const h3 = (palette: Palette): Partial<CSSProperties> => ({
  ...commonHStyle(palette),
  fontSize: '18px',
  lineHeight: '22px',
});

export const hStyles = (palette: Palette) => ({
  h1: h1(palette),
  h2: h2(palette),
  h3: h3(palette),
  h4: commonHStyle(palette),
  h5: commonHStyle(palette),
  h6: commonHStyle(palette),
});

export const typography: ThemeOptions['typography'] = (palette) => ({
  fontFamily: FontFamily,
  fontWeightLight: FontWeight.normal,
  fontWeightRegular: FontWeight.normal,
  fontWeightMedium: FontWeight.bold,
  fontWeightBold: FontWeight.bold,
  ...hStyles(palette),
});
