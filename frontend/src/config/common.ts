// app
import Theme, {Breakpoints, Screens} from '@/types/theme';

// theme
export const theme: Theme = {
  palette: {
    primary: {
      main: '#2BAD8E',
    },
    secondary: {
      main: '#AD4C2B',
      light: '#E4A38D',
    },
    error: {
      main: '#FF5252',
    },
    warning: {
      main: '#FFC107',
    },
    info: {
      main: '#2196F3',
    },
    success: {
      main: '#4CAF50',
    },
    textPrimary: {
      main: '#303133',
    },
    textRegular: {
      main: '#606266',
    },
    textSecondary: {
      main: '#909399',
    },
    white: {
      light: '#FFFFFF',
      main: '#F8F8F8',
    },
    border: {
      main: '#DCDFE6',
    },
  },
  breakpoints: {
    [Breakpoints.xs]: {
      start: 0,
      end: 599.98,
    },
    [Breakpoints.sm]: {
      start: 600,
      end: 959.98,
    },
    [Breakpoints.md]: {
      start: 960,
      end: 1263.98,
    },
    [Breakpoints.lg]: {
      start: 1264,
      end: 1903.98,
    },
    [Breakpoints.xl]: {
      start: 1904,
      end: Infinity,
    }
  },
  screens: {
    [Screens.mobile]: [Breakpoints.xs, Breakpoints.sm],
    [Screens.desktop]: [Breakpoints.md, Breakpoints.lg, Breakpoints.xl],
  },
  screen: null,
};

export default {
  theme,
};
