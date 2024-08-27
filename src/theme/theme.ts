import { ThemeOptions } from '@mui/material/styles';
import { colors } from '@base/colors';
import { breakpoints } from '@base/breakpoints';
import { customTypography } from './typography';

export const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: ['"Inter"', 'sans-serif'].join(','),
    fontWeightRegular: '400',
    fontWeightMedium: '500',
    fontWeightBold: '700',
    ...customTypography,
  },
  palette: {
    primary: {
      main: colors['brand-blue'][500],
    },
    grey: colors['neutral'],
    action: {
      hover: colors['brand-blue'][400],
      active: colors['brand-blue'][600],
    },
    error: {
      main: colors['red'][500],
    },
  },
  breakpoints: {
    values: {
      mobile: breakpoints.mobile,
      tablet: breakpoints.tablet,
      desktop: breakpoints.desktop,
      wide: breakpoints.wide,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {},
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Inter"',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: '"Inter" !important',
        },
      },
    },
  },
};
