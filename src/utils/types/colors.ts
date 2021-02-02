interface SubColors {
  light: string;
  main: string;
  dark: string;
  contrast: string;
}
export type Colors = {
  failure: string;
  warning: string;
  success: string;
  primary: SubColors;
  secondary: SubColors;
  accent: SubColors;
};
