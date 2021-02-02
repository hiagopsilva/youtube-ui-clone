import styled from 'styled-components';
import {
  FontAwesome,
  inMobile,
  MaterialIcons,
  moderateScale,
  getTheme,
} from '~/utils';

// Colors
const primaryLight = getTheme('primary.light');
const primaryContrast = getTheme('primary.contrast');

// Spacing
const smallSpacing = getTheme('smallSpacing');

// Icons
const { FaFire } = FontAwesome;
const { MdSubscriptions, MdVideoLibrary, MdHome } = MaterialIcons;

export const Wrapper = styled.div`
  bottom: 0;
  display: none;
  position: fixed;
  width: 100%;
  height: ${moderateScale(60)}px;

  background: ${primaryContrast};
  padding: 0 ${smallSpacing}px;

  ${inMobile(`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `)};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconHome = styled(MdHome).attrs(props => ({
  color: primaryLight(props),
}))`
  width: ${moderateScale(25)}px;
  height: ${moderateScale(25)}px;
`;

export const Title = styled.h3``;

export const IconFire = styled(FaFire).attrs(props => ({
  color: primaryLight(props),
}))`
  width: ${moderateScale(25)}px;
  height: ${moderateScale(25)}px;
`;

export const IconCards = styled(MdSubscriptions).attrs(props => ({
  color: primaryLight(props),
}))`
  width: ${moderateScale(25)}px;
  height: ${moderateScale(25)}px;
`;

export const IconLib = styled(MdVideoLibrary).attrs(props => ({
  color: primaryLight(props),
}))`
  width: ${moderateScale(25)}px;
  height: ${moderateScale(25)}px;
`;
