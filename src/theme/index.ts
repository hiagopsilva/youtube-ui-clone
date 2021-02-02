export { default as global } from './global';
export { device, size } from './breakpoints';
export { default as colors } from './colors';
export { default as radius } from './radius';
export { default as spacings } from './spacings';

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;

export const scale = (size: number): number =>
  (window.innerWidth / guidelineBaseWidth) * size;
export const verticalScale = (size: number): number =>
  (window.innerHeight / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
