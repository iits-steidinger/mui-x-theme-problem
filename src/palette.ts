import {type PaletteOptions} from '@mui/material';
import { isDarkTheme, Themes } from './theme';

type ExtendedPaletteOptions = PaletteOptions & { brand: any }

const primaryBlue = {
  primary100: '#f8fcff',
  primary500: '#0078dc',
  primary700: '#29527a',
  primary900: '#274061',
} as const;

const primaryGreen = {
  primary100: '#f8fcff',
  primary500: '#2fa85b',
  primary700: '#1d8746',
  primary900: '#065728',
} as const;

const primaryOrange = {
  primary100: '#f8fcff',
  primary500: '#de7a03',
  primary700: '#c76c00',
  primary900: '#a35700',
} as const;

const defaultColors = {
  secondary100: '#db8aa2',
  secondary500: '#de3a6b',

  neutral100: '#ffffff',
  neutral200: '#e2ebf2',
  neutral300: '#bbcbd9',
  neutral500: '#97a7ba',

  info500: '#E5F1FC',
  info900: '#2B3D50',

  success500: '#69ab46',

  warning500: '#ed8c1c',

  error100: '#fef4f4',
  error500: '#d43b38',
} as const;

const _colorsByTheme = {
  [Themes.BRAND_LIGHT]: primaryBlue,
  [Themes.BRAND_DARK]: primaryBlue,
  [Themes.ORANGE_LIGHT]: primaryOrange,
  [Themes.ORANGE_DARK]: primaryOrange,
  [Themes.GREEN_LIGHT]: primaryGreen,
  [Themes.GREEN_DARK]: primaryGreen,
} as const

export const colors = {
  ...defaultColors,
  ...primaryBlue,
} as const;

const _themeColors = (theme: Themes) => ({
  ...defaultColors,
  ..._colorsByTheme[theme],
} as const);

type ThemeColors = ReturnType<typeof _themeColors>;

const themeColors: (theme: Themes) => ThemeColors = _themeColors;

const basePalette: PaletteOptions = {
  common: {
    black: '#000',
    white: '#fff',
  },
};

const lightPalette = (colors: ThemeColors): ExtendedPaletteOptions => ({
  ...basePalette,
  mode: 'light',
  primary: {
    light: colors.primary100,
    main: colors.primary500,
    dark: colors.primary700,
  },
  secondary: {
    light: colors.secondary500,
    main: colors.secondary500,
    dark: colors.secondary500,
  },
  error: {
    100: colors.error100,
    500: colors.error500,
  },
  warning: {
    500: colors.warning500,
  },
  info: {
    500: colors.secondary500,
  },
  success: {
    500: colors.success500,
  },
  text: {
    primary: colors.primary700,
    secondary: colors.primary500,
    disabled: colors.neutral500,
  },
  brand: {
    navigation: {
      backgroundColor: colors.primary700,
      active: basePalette.common?.white,
    },
    card: {
      backgroundColor: colors.info500,
    },
  },
});

const darkPalette = (colors: ThemeColors): ExtendedPaletteOptions => ({
  ...basePalette,
  mode: 'dark',
  primary: {
    light: colors.primary100,
    main: colors.primary500,
    dark: colors.primary700,
  },
  secondary: {
    light: colors.secondary500,
    main: colors.secondary500,
    dark: colors.secondary500,
  },
  error: {
    100: colors.error100,
    500: colors.error500,
  },
  warning: {
    500: colors.warning500,
  },
  info: {
    500: colors.secondary500,
  },
  success: {
    500: colors.success500,
  },
  text: {
    primary: colors.primary100,
    secondary: colors.primary500,
    disabled: colors.neutral500,
  },
  brand: {
    navigation: {
      backgroundColor: '#303030',
      active: colors.primary500,
    },
    card: {
      backgroundColor: 'rgba(250,250,250,0.1)',
    },
  },
});

export const paletteFactory = (theme: Themes) => isDarkTheme(theme) ? darkPalette(themeColors(theme)) : lightPalette(themeColors(theme));
