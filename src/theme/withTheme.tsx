'use client';

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { themeOptions } from './theme';

const theme = createTheme(themeOptions);

function withTheme<P extends Object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> {
  return (props: P) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WrappedComponent {...props} />
    </ThemeProvider>
  );
}

export default withTheme;
