export type PaletteType = {
  primary: ColorType;
  secondary: ColorType;
  error: ColorType;
  warning: ColorType;
  info: ColorType;
  success: ColorType;
  textPrimary: ColorType;
  textRegular: ColorType;
  textSecondary: ColorType;
  white: ColorType;
  border: ColorType;
}

export type ColorType = {
  main: string;
  light?: string;
  dark?: string;
}

export enum Breakpoints {
  xs,
  sm,
  md,
  lg,
  xl
}

export type BreakpointsType = {
  [Breakpoints.xs]: BreakpointType;
  [Breakpoints.sm]: BreakpointType;
  [Breakpoints.md]: BreakpointType;
  [Breakpoints.lg]: BreakpointType;
  [Breakpoints.xl]: BreakpointType;
};

export type BreakpointType = {
  start: number;
  end: number;
};

export enum Screens {
  mobile,
  desktop,
}

export type ScreensType = {
  [Screens.mobile]: Breakpoints[];
  [Screens.desktop]: Breakpoints[];
};

type Theme = {
  palette: PaletteType;
  breakpoints: BreakpointsType;
  screens: ScreensType;
  screen?: Screens;
}
export default Theme;
