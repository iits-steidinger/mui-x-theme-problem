import { Icon, type ThemeOptions, Zoom } from '@mui/material';
import { ArrowIcon, ClearIcon } from './components/CustomIcons';
import { LoadingSpinner } from './components/LoadingSpinner';
import { FontFamily, FontSize, FontWeight, hStyles, px } from './typography';
import { type CSSProperties } from 'react';

export enum Themes {
    BRAND_LIGHT = 'brand-light',
    BRAND_DARK = 'brand-dark',
    ORANGE_LIGHT = 'orange-light',
    ORANGE_DARK = 'orange-dark',
    GREEN_LIGHT = 'green-light',
    GREEN_DARK = 'green-dark',
}

export enum ThemeMode {
    LIGHT = '-light',
    DARK = '-dark',
}

export const isDarkTheme = (theme: Themes) => theme.endsWith(ThemeMode.DARK);

export const inMode = (theme: Themes, mode: ThemeMode) =>
    mode === ThemeMode.DARK ? theme.replace(ThemeMode.LIGHT, ThemeMode.DARK) : theme.replace(ThemeMode.DARK, ThemeMode.LIGHT);

export enum ThemeLanguage {
    EN = 'en',
    DE = 'de',
}

export const componentsFactory = (
    container?: HTMLDivElement,
): ThemeOptions['components'] => {
    const popoverDefaultProps = { container };
    const commonMuiDefaultProps = {
        size: 'small' as const,
        variant: 'outlined' as const,
        fullWidth: true,
    };

    const commonMuiDefaultRowSpacing = { xs: 0.5, sm: 0.5, md: 1, lg: 2, xl: 3 };
    const commonMuiDefaultColumnSpacing = { xs: 0.5, sm: 1, md: 2, lg: 3, xl: 5 };
    const commonButtonStyles: CSSProperties = {
        fontSize: '1rem',
        fontFamily: FontFamily,
        fontWeight: FontWeight.bold,
        textTransform: 'none',
    };
    const commonToggleButtonStyles: CSSProperties = {
        ...commonButtonStyles,
        paddingTop: `${px(5)}`,
        paddingBottom: `${px(5)}`,
    };
    return {
        MuiTextField: {
            defaultProps: { ...commonMuiDefaultProps },
        },
        MuiInputLabel: {
            defaultProps: { size: 'small' },
            styleOverrides: {
                outlined: ({ ownerState, theme }) =>
                    (ownerState?.formControl as any)?.disabled
                        ? { color: makeImportant(theme.palette.text.disabled) }
                        : {},
            },
        },
        MuiSelect: {
            defaultProps: {
                ...commonMuiDefaultProps,
                IconComponent: ArrowIcon,
            },
            styleOverrides: {
                icon: ({ ownerState, theme }) => {
                    let color = theme.palette.primary.main;
                    if (ownerState?.disabled) {
                        color = makeImportant(theme.palette.text.disabled);
                    } else if (ownerState?.error || ownerState?.color === 'error') {
                        color = theme.palette.error.main;
                    }
                    return {
                        color,
                    };
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                input: ({ ownerState }) => ({
                    userSelect: ownerState?.disabled ? 'auto' : 'none',
                }),
            },
        },
        MuiIcon: {
            defaultProps: {
                baseClassName: 'brand-icons',
                color: 'primary',
                fontSize: 'small',
            },
            styleOverrides: {
                fontSizeSmall: {
                    fontSize: '1em', // align Adornments
                },
            },
        },
        MuiPopper: {
            defaultProps: popoverDefaultProps,
        },
        MuiPopover: {
            defaultProps: popoverDefaultProps,
        },
        MuiModal: {
            defaultProps: popoverDefaultProps,
        },
        MuiAutocomplete: {
            defaultProps: {
                ...commonMuiDefaultProps,
                clearIcon: <ClearIcon />,
                popupIcon: <ArrowIcon />,
                loadingText: <LoadingSpinner />,
            },
            styleOverrides: {
                noOptions: ({ ownerState, theme }) => {
                    if (ownerState?.error || ownerState?.color === 'error') {
                        return {
                            color: theme.palette.error.main,
                        };
                    }
                    return {};
                },
                popupIndicator: ({ ownerState, theme }) => {
                    let color = theme.palette.primary.main;
                    if (ownerState?.disabled) {
                        color = theme.palette.text.disabled;
                    } else if (ownerState?.error || ownerState?.color === 'error') {
                        color = theme.palette.error.main;
                    }
                    return {
                        color,
                    };
                },
            },
        },
        MuiInputBase: {
            defaultProps: { size: 'small' },
            styleOverrides: {
                sizeSmall: {
                    fontSize: '1rem', // align Adornments
                },
            },
        },
        MuiList: {
            styleOverrides: {
                root: { backgroundColor: makeImportant('inherit') },
            },
        },
        MuiIconButton: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiButton: {
            defaultProps: {
                size: 'medium',
                variant: 'outlined',
            },
            styleOverrides: {
                root: { ...commonButtonStyles },
            },
        },
        MuiButtonGroup: {
            defaultProps: {
                size: 'medium',
                variant: 'outlined',
            },
        },
        MuiTooltip: {
            defaultProps: {
                color: 'primary',
                TransitionComponent: Zoom,
                placement: 'right',
                followCursor: true,
            },
            styleOverrides: {
                tooltip: ({ ownerState, theme }) => {
                    if (ownerState?.color === 'error') {
                        return { backgroundColor: theme.palette.error.main };
                    } else if (ownerState?.color === 'warning') {
                        return { backgroundColor: theme.palette.warning.main };
                    } else if (ownerState?.color === 'primary') {
                        return { backgroundColor: theme.palette.grey['700'] };
                    }
                    return {};
                },
            },
        },
        MuiChip: {
            defaultProps: {
                size: 'medium',
                variant: 'outlined',
                deleteIcon: (
                    <Icon
                        className="ico-misc-circle-cancel"
                        color="inherit"
                        fontSize="small"
                    />
                ),
            },
        },
        MuiAccordionSummary: {
            defaultProps: {
                expandIcon: <Icon className="ico-arrows-arrow-circle-down" />,
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main} 50%, ${theme.palette.primary.dark})`,
                }),
            },
        },
        MuiStack: { defaultProps: { spacing: commonMuiDefaultRowSpacing } },
        MuiGrid: {
            defaultProps: {
                rowSpacing: commonMuiDefaultRowSpacing,
                columnSpacing: commonMuiDefaultColumnSpacing,
            },
        },
        MuiPaper: {
            variants: [
                {
                    props: { variant: 'outlined' },
                    style: {},
                },
            ],
        },
        MuiCard: {
            variants: [
                {
                    props: { variant: 'outlined' },
                    style: ({ theme }) => ({
                        backgroundColor: theme.palette.grey[700],
                        padding: `${theme.spacing(3)} ${theme.spacing(3)} ${theme.spacing(
                            0,
                        )} ${theme.spacing(3)}`,
                    }),
                },
            ],
        },
        MuiCardHeader: {
            styleOverrides: {
                root: ({ theme }) => ({
                    padding: `${theme.spacing(0)} ${theme.spacing(0)} ${theme.spacing(
                        2,
                    )} ${theme.spacing(0)}`,
                }),
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: ({ theme }) => ({
                    padding: `${theme.spacing(0)} ${theme.spacing(0)} ${theme.spacing(
                        2,
                    )} ${theme.spacing(0)}`,
                }),
            },
        },
        MuiToggleButton: {
            styleOverrides: {
                root: ({ theme: { palette }, ownerState }) =>
                    ownerState.disabled
                        ? { ...commonToggleButtonStyles }
                        : ownerState.selected
                            ? {
                                ...commonToggleButtonStyles,
                                color: makeImportant(palette.common.white),
                                borderColor: palette.primary.main,
                                backgroundColor: makeImportant(palette.primary.main),
                            }
                            : ownerState.color === 'error'
                                ? {
                                    ...commonToggleButtonStyles,
                                    color: palette.error.main,
                                    borderColor: palette.error.main,
                                }
                                : {
                                    ...commonToggleButtonStyles,
                                    color: palette.primary.main,
                                    borderColor: palette.primary.main,
                                },
            },
        },
        MuiSnackbar: {
            defaultProps: {
                anchorOrigin: { vertical: 'top', horizontal: 'right' },
                autoHideDuration: 10000,
            },
        },
        MuiAlert: {
            defaultProps: {
                variant: 'filled',
            },
        },
        MuiCssBaseline: {
            styleOverrides: (theme) => {
                const commonGlobalStyle = {
                    boxSizing: 'border-box',
                    height: '100%',
                    fontFamily: FontFamily,
                    fontWeight: FontWeight.normal,
                };
                return {
                    html: { ...commonGlobalStyle },
                    body: {
                        ...commonGlobalStyle,
                        backgroundColor: theme.palette.background,
                        fontFamily: FontFamily,
                        fontWeight: FontWeight.normal,
                        fontSize: FontSize.medium,
                    },
                    ...hStyles(theme.palette),
                    small: {
                        fontFamily: FontFamily,
                        fontWeight: FontWeight.normal,
                        fontSize: FontSize.small,
                        lineHeight: '18px',
                    },
                    a: {
                        textDecoration: 'none',
                        color: theme.palette.text.primary,
                        fontFamily: FontFamily,
                        fontSize: FontSize.medium,
                        fontWeight: FontWeight.bold,
                    },
                    nav: {
                        backgroundColor: theme.palette.background.paper,
                    },
                };
            },
        },
    };
};

const makeImportant = (style: string) => `${style} !important`;
