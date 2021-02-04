import React from 'react';

import {
  Wrapper,
  Content,
  IconHome,
  Title,
  IconFire,
  IconCards,
  IconLib,
} from './styles';

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <IconHome />
        <Title>Inicio</Title>
      </Content>
      <Content>
        <IconFire />
        <Title>Em alta</Title>
      </Content>
      <Content>
        <IconCards />
        <Title>Inscrições</Title>
      </Content>
      <Content>
        <IconLib />
        <Title>Biblioteca</Title>
      </Content>
    </Wrapper>
  );
};

export default Footer;
