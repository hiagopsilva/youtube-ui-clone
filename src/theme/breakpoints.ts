import { TypesBreactpointsDevice, TypesBreactpointsSize } from '~/utils';

export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
} as TypesBreactpointsSize;

export const device = {
  mobileS: `(min-device-width: ${size.mobileS})`,
  mobile: '(max-width: 684px)',
  mobileM: `(min-device-width: ${size.mobileM})`,
  mobileL: `(min-device-width: ${size.mobileL})`,
  tablet: `(min-device-width: ${size.tablet})`,
  laptop: `(min-device-width: ${size.laptop}) and (max-device-width: ${size.laptopL})`,
  deviceDesktop: '(min-width: 684px)',
} as TypesBreactpointsDevice;
