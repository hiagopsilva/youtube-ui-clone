import styled from 'styled-components';
import {
  moderateScale,
  getTheme,
  FontAwesome,
  MaterialIcons,
  inMobile,
  GrommetIcons,
  AntDesignIcons,
  BootstrapIcons,
  IonIcons,
  IoMdIcons,
} from '~/utils';

// Colors
const primaryLight = getTheme('primary.light');
const primaryContrast = getTheme('primary.contrast');
const secondaryMain = getTheme('secondary.main');
const secondaryDark = getTheme('secondary.dark');
const secondaryContrast = getTheme('secondary.contrast');

// Icons
const { FaFire, FaPlayCircle } = FontAwesome;
const { AiOutlinePlaySquare } = AntDesignIcons;
const { GrYoutube } = GrommetIcons;
const { IoGameControllerOutline, IoBookSharp, IoFlagSharp } = IonIcons;
const { IoMdHelpCircle } = IoMdIcons;
const { BiLike, BiWorld } = BootstrapIcons;
const {
  MdSubscriptions,
  MdVideoLibrary,
  MdHome,
  MdHistory,
  MdAccessTime,
  MdLocalMovies,
  MdSettings,
  MdFeedback,
} = MaterialIcons;

export const Wrapper = styled.div`
  width: ${moderateScale(110)}px;

  background: ${primaryContrast};

  position: sticky;
  left: 0;
  min-height: inherit;
  height: 100%;

  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar-track {
    background-color: ${primaryContrast};
  }
  ::-webkit-scrollbar {
    width: ${moderateScale(4)}px;
    background: ${secondaryContrast};
  }
  ::-webkit-scrollbar-thumb {
    background: ${secondaryContrast};
  }

  ${inMobile(`
    display: none;
  `)}
`;

export const Content = styled.div`
  & + div {
    border-top: 1px solid ${secondaryDark};
  }
`;

export const Horizontal = styled.div`
  padding-left: ${moderateScale(10)}px;
  width: 100%;
  height: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    background: ${secondaryMain};
    cursor: pointer;
  }
`;

export const Text = styled.h1`
  margin-left: ${moderateScale(5)}px;
  font-weight: 400;
  color: ${primaryLight};

  &:hover {
    color: ${primaryLight};
  }
`;

export const IconHome = styled(MdHome).attrs(props => ({
  color: primaryLight(props),
}))`
  width: ${moderateScale(10)}px;
  height: ${moderateScale(10)}px;
`;

export const IconFire = styled(FaFire).attrs(props => ({
  color: secondaryDark(props),
}))`
  width: ${moderateScale(10)}px;
  height: ${moderateScale(10)}px;
`;

export const IconCards = styled(MdSubscriptions).attrs(props => ({
  color: secondaryDark(props),
}))`
  width: ${moderateScale(10)}px;
  height: ${moderateScale(10)}px;
`;

export const IconLib = styled(MdVideoLibrary).attrs(props => ({
  color: secondaryDark(props),
}))`
  width: ${moderateScale(10)}px;
  height: ${moderateScale(10)}px;
`;

export const IconYTMusic = styled(FaPlayCircle).attrs(props => ({
  color: secondaryDark(props),
}))`
  width: ${moderateScale(10)}px;
  height: ${moderateScale(10)}px;
`;

export const IconOriginals = styled(GrYoutube).attrs(props => ({
  color: secondaryDark(props),
}))`
  width: ${moderateScale(10)}px;
  height: ${moderateScale(10)}px;
`;

export const IconHistory = styled(MdHistory).attrs(props => ({
  color: secondaryDark(props),
}))`
  width: ${moderateScale(10)}px;
  height: ${moderateScale(10)}px;
`;

export const IconYourMovies = styled(AiOutlinePlaySquare).attrs(props => ({
  color: secondaryDark(props),
}))`
  width: ${moderateScale(10)}px;
  height: ${moderateScale(10)}px;
`;

export const IconTime = styled(MdAccessTime).attrs(props => ({
  color: secondaryDark(props),
}))`
  width: ${moderateScale(10)}px;
  height: ${moderateScale(10)}px;
`;

export const IconLike = styled(BiLike).attrs(props => ({
  color: secondaryDark(props),
}))`
  width: ${moderateScale(10)}px;
  height: ${moderateScale(10)}px;
`;

export const IconBall = styled.div`
  width: ${moderateScale(10)}px;
  height: ${moderateScale(10)}px;
  border-radius: 50%;

  background: ${secondaryDark};
`;

export const IconMovie = styled(MdLocalMovies).attrs(props => ({
  color: secondaryDark(props),
}))`
  width: ${moderateScale(10)}px;
  height: ${moderateScale(10)}px;
`;

export const IconGameHeart = styled(IoGameControllerOutline).attrs(props => ({
  color: secondaryDark(props),
}))`
  width: ${moderateScale(10)}px;
  height: ${moderateScale(10)}px;
`;

export const IconLive = styled(BiWorld).attrs(props => ({
  color: secondaryDark(props),
}))`
  width: ${moderateScale(10)}px;
  height: ${moderateScale(10)}px;
`;

export const IconLearning = styled(IoBookSharp).attrs(props => ({
  color: secondaryDark(props),
}))`
  width: ${moderateScale(10)}px;
  height: ${moderateScale(10)}px;
`;

export const IconConfig = styled(MdSettings).attrs(props => ({
  color: secondaryDark(props),
}))`
  width: ${moderateScale(10)}px;
  height: ${moderateScale(10)}px;
`;

export const IconHistoryBan = styled(IoFlagSharp).attrs(props => ({
  color: secondaryDark(props),
}))`
  width: ${moderateScale(10)}px;
  height: ${moderateScale(10)}px;
`;

export const IconHelp = styled(IoMdHelpCircle).attrs(props => ({
  color: secondaryDark(props),
}))`
  width: ${moderateScale(10)}px;
  height: ${moderateScale(10)}px;
`;

export const IconFeedBack = styled(MdFeedback).attrs(props => ({
  color: secondaryDark(props),
}))`
  width: ${moderateScale(10)}px;
  height: ${moderateScale(10)}px;
`;
