import React from 'react';

import {
  Wrapper,
  WrapperLeft,
  WrapperCenter,
  WrapperRight,
  IconHamburger,
  IconYouTube,
  TitleLogo,
  WrapperLogo,
  Input,
  Button,
  IconAudio,
  IconSearch,
  IconCamera,
  IconCube,
  IconNotification,
  Avatar,
} from './styles';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <WrapperLeft>
        <IconHamburger />

        <WrapperLogo>
          <IconYouTube />
          <TitleLogo>YouTube</TitleLogo>
        </WrapperLogo>
      </WrapperLeft>
      <WrapperCenter>
        <div className="search">
          <Input placeholder="Pesquisar" />
          <Button>
            <IconSearch />
          </Button>
        </div>

        <IconAudio />
      </WrapperCenter>
      <WrapperRight>
        <IconCamera />
        <IconCube />
        <IconNotification />
        <Avatar />
      </WrapperRight>
    </Wrapper>
  );
};

export default Header;
