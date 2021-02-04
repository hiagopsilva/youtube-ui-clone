import React from 'react';

import Card from '../Card';
import { Wrapper, Content } from './styles';

const WrapperCards: React.FC = () => {
  const cardsNumbers = Math.floor(Math.random() * 50 + 1);
  const cards = [];

  for (let i = 0; i < cardsNumbers; i++) {
    cards.push(<Card />);
  }

  return (
    <Wrapper>
      <Content>{cards}</Content>
    </Wrapper>
  );
};

export default WrapperCards;
