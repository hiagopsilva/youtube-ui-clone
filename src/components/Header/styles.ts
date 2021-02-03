import styled from 'styled-components';
import {
  AntDesignIcons,
  GameIcons,
  GrommetIcons,
  HeroIcons,
  IoMdIcons,
  IonIcons,
  getTheme,
  moderateScale,
  inMobile,
} from '~/utils';

type PropsIconSearch = {
  mobile: boolean;
};

// Colors
const primaryLight = getTheme('primary.light');
const primaryMain = getTheme('primary.main');
const primaryContrast = getTheme('primary.contrast');
const secondaryLight = getTheme('secondary.light');
const secondaryMain = getTheme('secondary.main');
const secondaryDark = getTheme('secondary.dark');

// Spacings
const sceneSpacing = getTheme('sceneSpacing');
const buttonSpacing = getTheme('buttonSpacing');

// Icons
const { GiHamburgerMenu } = GameIcons;
const { GrYoutube } = GrommetIcons;
const { AiFillAudio, AiOutlineVideoCamera } = AntDesignIcons;
const { HiSearch } = HeroIcons;
const { IoAppsSharp } = IonIcons;
const { IoMdNotifications } = IoMdIcons;

export const Wrapper = styled.div`
  height: ${moderateScale(23)}px;
  width: 100%;
  background: ${primaryContrast};

  position: sticky;
  top: 0;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 ${sceneSpacing}px;

  ${inMobile(`
    height: ${moderateScale(50)}px;
    padding: 0  ${moderateScale(10)}px;
  `)}
`;

export const WrapperLeft = styled.div`
  height: 100%;
  width: 13%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperCenter = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div.search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: ${moderateScale(12)}px;

    background: ${secondaryLight};
    border-radius: 1px;
    border: 1px solid ${secondaryMain};
  }

  ${inMobile(`
    display: none
  `)}
`;

export const WrapperRight = styled.div`
  height: 100%;
  width: 14%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${inMobile(`
    width: ${moderateScale(75)}px;
  `)}
`;

export const IconHamburger = styled(GiHamburgerMenu).attrs(props => ({
  color: primaryLight(props),
}))`
  width: ${moderateScale(10)}px;
  height: ${moderateScale(10)}px;

  ${inMobile(`
    display: none
  `)}
`;

export const IconYouTube = styled(GrYoutube).attrs(props => ({
  color: primaryMain(props),
}))`
  width: ${moderateScale(14)}px;
  height: ${moderateScale(14)}px;

  ${inMobile(`
    width: ${moderateScale(30)}px;
    height: ${moderateScale(30)}px;
  `)}
`;

export const TitleLogo = styled.h1`
  color: ${primaryLight};
  margin-left: ${buttonSpacing}px;
  font-size: 22px;
`;

export const WrapperLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.input`
  flex: 1;
  height: 100%;

  border: 0;
  padding: 0 ${buttonSpacing}px;
  color: ${primaryLight};
  background: transparent;
  font-weight: bold;
`;

export const Button = styled.button`
  height: 100%;
  width: 70px;

  background: ${secondaryMain};

  border: 0;
  border-top-right-radius: 1px;
  border-bottom-right-radius: 1px;
`;

export const IconSearch = styled(HiSearch).attrs((props: PropsIconSearch) => ({
  color: secondaryDark(props),
}))`
  width: ${moderateScale(8)}px;
  height: ${moderateScale(8)}px;

  &.mobile {
    ${inMobile(`
      display: block;
    `)}
  }

  ${inMobile(`
    width: ${moderateScale(25)}px;
    height: ${moderateScale(25)}px;
  `)}
`;

export const IconAudio = styled(AiFillAudio).attrs(props => ({
  color: primaryLight(props),
}))`
  margin-left: ${moderateScale(5)}px;
  width: ${moderateScale(9)}px;
  height: ${moderateScale(9)}px;
`;

export const IconCamera = styled(AiOutlineVideoCamera).attrs(props => ({
  color: primaryLight(props),
}))`
  width: ${moderateScale(9)}px;
  height: ${moderateScale(10)}px;

  ${inMobile(`
    display: none;
  `)}
`;

export const IconCube = styled(IoAppsSharp).attrs(props => ({
  color: primaryLight(props),
}))`
  width: ${moderateScale(9)}px;
  height: ${moderateScale(10)}px;

  ${inMobile(`
    display: none;
  `)}
`;

export const IconNotification = styled(IoMdNotifications).attrs(props => ({
  color: primaryLight(props),
}))`
  width: ${moderateScale(9)}px;
  height: ${moderateScale(10)}px;

  ${inMobile(`
    display: none;
  `)}
`;

export const Avatar = styled.div`
  width: ${moderateScale(15)}px;
  height: ${moderateScale(15)}px;

  border-radius: 50%;
  background: ${secondaryMain};

  ${inMobile(`
    width: ${moderateScale(30)}px;
    height: ${moderateScale(30)}px;
  `)}
`;
