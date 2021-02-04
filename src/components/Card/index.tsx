import React from 'react';

import {
  Wrapper,
  Image,
  Content,
  Avatar,
  WrapperDescription,
  Header,
  Title,
  IconDetails,
  Author,
  Views,
  Time,
  IconTime,
  IconList,
} from './styles';

const Card: React.FC = () => {
  return (
    <Wrapper>
      <Image>
        <div className="wrapper-icons">
          <div className="content-icons">
            <IconTime />
          </div>
          <div className="content-icons">
            <IconList />
          </div>
        </div>
      </Image>
      <Content>
        <Avatar />
        <WrapperDescription>
          <Header>
            <Title>lofi hip hop beats</Title>
            <IconDetails />
          </Header>
          <Author>Jazz hop</Author>
          <Views>3,1 mil Visualizações</Views>
          <Time>há 1 ano</Time>
        </WrapperDescription>
      </Content>
    </Wrapper>
  );
};

export default Card;
