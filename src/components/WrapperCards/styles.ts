import styled from 'styled-components';
import { getTheme, inMobile, moderateScale } from '~/utils';

// Icons
const primaryDark = getTheme('primary.dark');
const primaryContrast = getTheme('primary.contrast');
const secondaryContrast = getTheme('secondary.contrast');
const accentLight = getTheme('accent.light');

export const Wrapper = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;

  background: ${primaryDark};

  color: ${accentLight};

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
    width: 100%;
    height: 100%;
  `)}
`;

export const Content = styled.div`
  width: 98%;
  display: flex;
  padding: ${moderateScale(10)}px 0 0 ${moderateScale(8)}px;

  flex-wrap: wrap;
  align-content: flex-start;

  ${inMobile(`
    padding: ${moderateScale(20)}px ${moderateScale(15)}px
    width: 100%;
    height: 100%;
      
    display: flex;
    flex-direction: column;

    flex-wrap: nowrap;
  `)}
`;
