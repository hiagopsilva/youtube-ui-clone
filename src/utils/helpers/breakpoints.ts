const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
};

export const inMobile = (
  style = '',
) => `@media screen and (max-width: ${breakpoints.tablet}) {
  ${style}
}`;

export const inTablet = (
  style = '',
) => `@media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
  ${style}
}`;

export const inDesktop = (
  style = '',
) => `@media screen and (min-width: ${breakpoints.desktop}) {
  ${style}
}`;

export default {
  inMobile,
  inTablet,
  inDesktop,
};
