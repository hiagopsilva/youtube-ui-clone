const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;

export const scale = (size: number): number =>
  (window.innerWidth / guidelineBaseWidth) * size;
export const verticalScale = (size: number): number =>
  (window.innerHeight / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
