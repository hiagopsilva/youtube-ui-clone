import styled from 'styled-components';

import {
  IoMdIcons,
  MaterialIcons,
  moderateScale,
  getTheme,
  inMobile,
} from '~/utils';
import { BgCard, BgAvatarChannel } from '~/assets';

// Colors
const primaryLight = getTheme('primary.light');
const accentLight = getTheme('accent.light');
const accentMain = getTheme('accent.main');

// Spacings
const buttonSpacing = getTheme('buttonSpacing');
const smallSpacing = getTheme('smallSpacing');
const minimumSpacing = getTheme('minimumSpacing');

// Icons
const { IoMdMore } = IoMdIcons;
const { MdAccessTime, MdPlaylistPlay } = MaterialIcons;

export const Wrapper = styled.div`
  width: ${moderateScale(105)}px;
  height: ${moderateScale(100)}px;

  border-radius: 2px;
  background: transparent;

  margin: 0 ${moderateScale(5)}px ${moderateScale(10)}px 0;

  &:hover svg {
    display: block;
  }

  &:hover div.wrapper-icons {
    display: block;
  }
  &:hover {
    cursor: pointer;
  }

  ${inMobile(`
    width: 100%;
    height: ${moderateScale(280)}px;
    margin-bottom:  ${moderateScale(20)}px;
  `)}
`;

export const Image = styled.div`
  width: 100%;
  height: ${moderateScale(60)}px;

  background-image: url(${BgCard});
  background-position: center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  div.wrapper-icons {
    margin: ${buttonSpacing}px ${buttonSpacing}px 0 0;

    display: none;

    div.content-icons {
      width: ${moderateScale(12)}px;
      height: ${moderateScale(12)}px;

      display: flex;
      justify-content: center;
      align-items: center;

      background: ${accentMain};
      border-radius: 2px;

      & + div {
        margin-top: ${buttonSpacing}px;
      }

      ${inMobile(`
       width: ${moderateScale(35)}px;
       height: ${moderateScale(35)}px;
      `)}
    }
  }

  ${inMobile(`
    width: 100%;
    height: ${moderateScale(150)}px;
  `)}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.div`
  width: ${moderateScale(18)}px;
  height: ${moderateScale(18)}px;

  background-image: url(${BgAvatarChannel});
  background-position: center;
  background-size: cover;

  border-radius: 50%;

  margin: ${smallSpacing}px ${smallSpacing}px 0 0;

  ${inMobile(`
    width: ${moderateScale(55)}px;
    height: ${moderateScale(55)}px;
  `)}
`;

export const WrapperDescription = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: ${moderateScale(18)}px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${inMobile(`
    height: ${moderateScale(50)}px;
  `)}
`;

export const Title = styled.h1`
  color: ${primaryLight};
  font-size: ${moderateScale(7)}px;

  ${inMobile(`
    font-size: ${moderateScale(20)}px; 
  `)}
`;

export const IconDetails = styled(IoMdMore).attrs(props => ({
  color: accentLight(props),
}))`
  width: ${moderateScale(10)}px;
  height: ${moderateScale(10)}px;

  display: none;

  ${inMobile(`
    width: ${moderateScale(35)}px;
    height: ${moderateScale(35)}px;
  `)}
`;

export const Author = styled.span`
  margin-bottom: ${minimumSpacing}px;
`;

export const Views = styled.span`
  margin-bottom: ${minimumSpacing}px;
`;

export const Time = styled.span``;

export const IconTime = styled(MdAccessTime).attrs(props => ({
  color: primaryLight(props),
}))`
  width: ${moderateScale(9)}px;
  height: ${moderateScale(9)}px;

  display: none;

  ${inMobile(`
    width: ${moderateScale(22)}px;
    height: ${moderateScale(22)}px;
  `)}
`;

export const IconList = styled(MdPlaylistPlay).attrs(props => ({
  color: primaryLight(props),
}))`
  width: ${moderateScale(9)}px;
  height: ${moderateScale(9)}px;

  display: none;

  ${inMobile(`
    width: ${moderateScale(22)}px;
    height: ${moderateScale(22)}px;
  `)}
`;
