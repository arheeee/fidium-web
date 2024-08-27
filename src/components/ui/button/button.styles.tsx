// src/components/ui/button/button.styles.tsx

import { styled, css } from '@mui/material/styles';
import { Button, IconButton } from '@mui/material';
import { colors } from '@base/colors';
import { pxToRem } from '@base/helpers';

export const iconColor = css`
  color: '#fff';
`;

export const StyledButton = styled(Button)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  borderRadius: pxToRem(6),
  boxShadow: 'none',
  textTransform: 'none',

  '&.MuiButton-root': {
    [theme.breakpoints.down('tablet')]: {
      width: '100% !important',
    },
  },

  '.MuiButton-icon svg': {
    fontSize: pxToRem(24),
    width: pxToRem(24),
  },

  '&:focus-visible': {
    outline: `${pxToRem(1)} solid ${colors['neutral'].black}`,
    outlineOffset: pxToRem(2),
  },

  '&.MuiButton-contained': {
    '&:hover': {
      backgroundColor: colors['--btn-primary-bg-hover'],
    },

    '&:active': {
      backgroundColor: colors['--btn-primary-bg-click'],
      boxShadow: `0 0 ${pxToRem(10)} 0 rgba(0, 0, 0, 0.35)`,
    },
  },

  '&.MuiButton-outlined, &.MuiButton-text': {
    border: `${pxToRem(2)} solid ${colors['--btn-secondary-outline']}`,
    backgroundColor: colors['--btn-secondary-bg'],

    '&:hover': {
      backgroundColor: colors['--btn-secondary-bg-hover-15opacity'],
      borderColor: colors['--btn-secondary-outline-hover'],
    },

    '&:active': {
      color: colors['brand-blue'][600],
      backgroundColor: colors['--btn-secondary-bg-click-25opacity'],
      borderColor: colors['--btn-primary-bg-click'],
      boxShadow: `0 0 ${pxToRem(10)} 0 rgba(0, 0, 0, 0.35)`,
    },
  },

  '&.MuiButton-text': {
    border: 'none',
    backgroundColor: 'transparent',

    '&:active': {
      boxShadow: 'none',
    },
  },

  '&.Mui-disabled': {
    backgroundColor: colors['--btn-disabled-bg'],
    color: colors['--btn-disabled-text'],
    borderColor: colors['--btn-disabled-text'],
  },

  '&.MuiButton-sizeLarge': {
    padding: `${pxToRem(15)} ${pxToRem(24)}`,
    height: pxToRem(56),
  },

  '&.MuiButton-sizeMedium': {
    padding: `${pxToRem(8)} ${pxToRem(32)}`,
    height: pxToRem(40),
  },

  '&.MuiButton-sizeSmall': {
    padding: `${pxToRem(7)} ${pxToRem(24)}`,
    height: pxToRem(32),
    'span.MuiButton-iconSizeSmall': {
      width: pxToRem(18),
    },
  },

  '&.MuiButton-text.Mui-disabled': {
    backgroundColor: 'transparent',
  },

  '&.MuiButton-text.MuiButton-sizeLarge': {
    padding: `${pxToRem(15)} ${pxToRem(8)}`,
  },

  '&.MuiButton-text.MuiButton-sizeMedium': {
    padding: `${pxToRem(8)} ${pxToRem(8)}`,
  },

  '&.MuiButton-text.MuiButton-sizeSmall': {
    padding: `${pxToRem(7)} ${pxToRem(8)}`,
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: pxToRem(12),
  borderRadius: pxToRem(8),
  backgroundColor: colors['brand-blue'][100],
  fontSize: pxToRem(24),

  '&:hover': {
    backgroundColor: colors['brand-blue'][200],
  },

  '&:focus': {
    backgroundColor: colors['brand-blue'][300],
    outline: `${pxToRem(1)} solid ${colors['neutral'].black}`,
    outlineOffset: pxToRem(2),
  },

  '&:active': {
    backgroundColor: colors['brand-blue'][300],
  },

  '&:focus-visible': {
    outline: `${pxToRem(1)} solid ${colors['neutral'].black}`,
    outlineOffset: pxToRem(2),
  },

  '&:disabled': {
    backgroundColor: colors['--backgrounds-light-gray'],
  },

  '&.clear': {
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: colors['brand-blue'][100],
    },

    '&:focus': {
      backgroundColor: colors['brand-blue'][300],
    },

    '&:active': {
      backgroundColor: colors['brand-blue'][200],
    },

    '&:disabled': {
      backgroundColor: 'transparent',
    },
  },
}));
