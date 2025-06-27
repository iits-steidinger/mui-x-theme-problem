import { type PropsWithChildren, type FC, useMemo } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material"
import { deDE, enUS } from '@mui/material/locale';
import { deDE as dataGridDE, enUS as dataGridEN } from '@mui/x-data-grid/locales';
import { componentsFactory, Themes, ThemeLanguage } from "./theme";
import { paletteFactory } from "./palette";
import { typography } from "./typography";

interface ThemeProviderProps extends Required<PropsWithChildren> {
  theme: Themes;
  language: ThemeLanguage;
  container?: HTMLDivElement;
}

export const CustomThemeProvider: FC<ThemeProviderProps> = ({
  theme,
  language,
  container,
  children,
}) => {
  const muiTheme = useMemo(
    () => themeFactory({ theme, container, language }),
    [theme, container, language]
  );
  return (
    <ThemeProvider theme={muiTheme} key={`${theme}-${language}`}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

interface ThemeFactoryProps {
  theme: Themes;
  language: ThemeLanguage;
  container?: HTMLDivElement;
}

const themeFactory = ({ theme, container, language }: ThemeFactoryProps) =>
  createTheme(
    {
      palette: paletteFactory(theme),
      components: componentsFactory(container),
      typography,
    },
    ...(language === ThemeLanguage.DE ? de : en)
  );

const de = [dataGridDE, deDE] as const;
const en = [dataGridEN, enUS] as const;
