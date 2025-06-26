import { type PropsWithChildren, type FC, useMemo } from "react";
import { type ThemeOptions, createTheme, ThemeProvider, CssBaseline } from "@mui/material"
import { deDE, enUS } from '@mui/material/locale';
import { deDE as dataGridDE, enUS as dataGridEN } from '@mui/x-data-grid/locales';
import { ClearIcon } from './components/CustomIcons';

interface ThemeProviderProps extends Required<PropsWithChildren> {
  language: ThemeLanguage;
  container?: HTMLDivElement;
}

export const CustomThemeProvider: FC<ThemeProviderProps> = ({
  language,
  container,
  children,
}) => {
  const muiTheme = useMemo(
    () => themeFactory({ container, language }),
    [container, language]
  );
  return (
    <ThemeProvider theme={muiTheme} key={`theme-${language}`}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

interface ThemeFactoryProps {
  language: ThemeLanguage;
  container?: HTMLDivElement;
}

const themeFactory = ({ container, language }: ThemeFactoryProps) =>
  createTheme(
    {
      components: componentsFactory(container),
    },
    ...(language === ThemeLanguage.DE ? de : en)
  );

const de = [dataGridDE, deDE] as const;
const en = [dataGridEN, enUS] as const;

export enum ThemeLanguage {
  EN = 'en',
  DE = 'de',
}

const componentsFactory = (
  container?: HTMLDivElement,
): ThemeOptions['components'] => {
  const commonMuiDefaultProps = {
    size: 'small' as const,
    variant: 'outlined' as const,
    fullWidth: true,
  };

  return {
    MuiAutocomplete: {
      defaultProps: {
        ...commonMuiDefaultProps,
        clearIcon: <ClearIcon />,
      },
    },
  }
};
