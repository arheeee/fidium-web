import { lighten } from './helpers';

const palette = {
  'brand-blue': {
    100: '#e5efff',
    200: '#c8dafc',
    300: '#94b1e5',
    400: '#4d72b5',
    500: '#003595',
    600: '#162c6b',
    700: '#002059',
    800: '#00153c',
    900: '#000b1e'
  },
  green: {
    100: '#def5e7',
    200: '#b6edcb',
    300: '#84e4a9',
    400: '#4dd882',
    500: '#00ac40',
    600: '#008533',
    700: '#006828',
    800: '#00461a',
    900: '#00230d'
  },
  lime: {
    100: '#e9f7cc',
    200: '#dff5ac',
    300: '#cbec82',
    400: '#b8e357',
    500: '#93d500',
    600: '#76aa00',
    700: '#588000',
    800: '#3b5500',
    900: '#1d2b00'
  },
  neutral: {
    100: '#f7f8fa',
    200: '#ebecf2',
    300: '#dadde6',
    400: '#c0c1c4',
    500: '#636569',
    600: '#505257',
    700: '#3b3d3f',
    800: '#28282a',
    900: '#25282e',
    black: '#191a1c',
    white: '#ffffff'
  },
  orange: {
    100: '#fff0da',
    200: '#ffddb0',
    300: '#ffc574',
    400: '#ffb146',
    500: '#ff9e18',
    600: '#cc7e13',
    700: '#995f0e',
    800: '#663f0a',
    900: '#332005'
  },
  red: {
    100: '#f7d4d5',
    200: '#efa9ac',
    300: '#e87f82',
    400: '#e05459',
    500: '#d8292f',
    600: '#ad2126',
    700: '#82191c',
    800: '#561013',
    900: '#2b0809'
  },
  yellow: {
    100: '#fff5cc',
    200: '#ffeb99',
    300: '#ffe578',
    400: '#ffdb47',
    500: '#ffcd00',
    600: '#cca400',
    700: '#997b00',
    800: '#665200',
    900: '#332900'
  },
  purple: {
    500: '#4a0eb6'
  }
};

const custom = {
  '--btn-primary-bg': palette['brand-blue'][500],
  '--btn-primary-bg-click': palette['brand-blue'][600],
  '--btn-primary-bg-hover': palette['brand-blue'][400],
  '--btn-primary-text': palette.neutral.white,
  '--btn-secondary-bg': palette.neutral.white,
  '--btn-secondary-bg-hover-15opacity': lighten(
    palette['brand-blue'][400],
    0.15
  ),
  '--btn-secondary-bg-click-25opacity': lighten(
    palette['brand-blue'][400],
    0.25
  ),
  '--btn-secondary-outline': palette['brand-blue'][500],
  '--btn-secondary-outline-hover': palette['brand-blue'][400],
  '--btn-secondary-text': palette['brand-blue'][500],
  '--btn-tertiary-bg-hover-15opacity': lighten(
    palette['brand-blue'][400],
    0.15
  ),
  '--btn-tertiary-text': palette['brand-blue'][500],
  '--btn-disabled-bg': palette.neutral[200],
  '--btn-disabled-text': palette.neutral[600],
  '--btn-secondary-disabled-text': palette.neutral[400],
  '--btn-focused-outline': palette.neutral.black,
  '--backgrounds-black': palette.neutral.black,
  '--backgrounds-brand-blue': palette['brand-blue'][500],
  '--backgrounds-dark-gray': palette.neutral[700],
  '--backgrounds-green': palette.green[600],
  '--backgrounds-light': palette.neutral.white,
  '--backgrounds-light-gray': palette.neutral[200],
  '--backgrounds-lightest-gray': palette.neutral[100],
  '--cards-bg-highlight-blue': palette['brand-blue'][100],
  '--cards-bg-highlight-green': -palette.lime[100],
  '--cards-bg-light-gray': palette.neutral[100],
  '--cards-bg-white': palette.neutral.white,
  '--cards-outline-blue': palette['brand-blue'][500],
  '--cards-outline-gray': palette.neutral[500],
  '--cards-outline-green': palette.green[600],
  '--icons-blue': palette['brand-blue'][500],
  '--icons-green': palette.green[600],
  '--icons-ui-confirm': palette.green[600],
  '--icons-ui-error': palette.red[200],
  '--icons-ui-warning': palette.orange[600],
  '--icons-white': palette.neutral.white,
  '--text-dark': palette.neutral.black,
  '--text-green': palette.green[600],
  '--text-gray': palette.neutral[500],
  '--text-light': palette.neutral.white,
  '--text-link': palette['brand-blue'][500],
  '--text-link-hover': palette['brand-blue'][400],
  '--text-link-visited': palette['purple'][500],
  '--ui-alert': palette.red[400],
  '--ui-divider': palette.neutral[300],
  '--ui-form-field-outline': palette.neutral[300],
  '--ui-rule': palette.neutral[300],
  '--ui-scroll-element': palette.neutral[300]
};

export const colors = { ...palette, ...custom };
