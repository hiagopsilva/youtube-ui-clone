import React from 'react';

import {
  Wrapper,
  Content,
  Horizontal,
  IconHome,
  IconFire,
  IconCards,
  Text,
  IconOriginals,
  IconYTMusic,
  IconHistory,
  IconYourMovies,
  IconTime,
  IconLike,
  IconBall,
  IconMovie,
  IconGameHeart,
  IconLive,
  IconLearning,
  IconConfig,
  IconHistoryBan,
  IconHelp,
  IconFeedBack,
} from './styles';

const dataHandleMenu = [
  {
    0: {
      icon: <IconHome />,
      name: 'Inicio',
    },
    1: {
      icon: <IconFire />,
      name: 'Em alta',
    },
    2: {
      icon: <IconCards />,
      name: 'Inscrições',
    },
    3: {
      icon: <IconOriginals />,
      name: 'Originals',
    },
    4: {
      icon: <IconYTMusic />,
      name: 'YouTube Music',
    },
  },
  {
    0: {
      icon: <IconCards />,
      name: 'Biblioteca',
    },
    1: {
      icon: <IconHistory />,
      name: 'Histórico',
    },
    2: {
      icon: <IconYourMovies />,
      name: 'Seus videos',
    },
    3: {
      icon: <IconTime />,
      name: 'Assistir mais tarde',
    },
    4: {
      icon: <IconLike />,
      name: 'Videos marcados co...',
    },
  },
  {
    0: {
      icon: <IconBall />,
      name: 'Canal 1',
    },
    1: {
      icon: <IconBall />,
      name: 'Canal 2',
    },
    2: {
      icon: <IconBall />,
      name: 'Canal 3',
    },
    3: {
      icon: <IconBall />,
      name: 'Canal 4',
    },
    4: {
      icon: <IconBall />,
      name: 'Canal 5',
    },
  },
  {
    0: {
      icon: <IconMovie />,
      name: 'Filmes',
    },
    1: {
      icon: <IconGameHeart />,
      name: 'Jogos',
    },
    2: {
      icon: <IconLive />,
      name: 'Ao vivo',
    },
    3: {
      icon: <IconLearning />,
      name: 'Aprender',
    },
  },
  {
    0: {
      icon: <IconConfig />,
      name: 'Configurações',
    },
    1: {
      icon: <IconHistoryBan />,
      name: 'Histórico de denúncias',
    },
    2: {
      icon: <IconHelp />,
      name: 'Ajuda',
    },
    3: {
      icon: <IconFeedBack />,
      name: 'Enviar feedback',
    },
  },
];

const Menu: React.FC = () => {
  return (
    <Wrapper>
      {dataHandleMenu.map(item => (
        <Content>
          <Horizontal>
            {item[0].icon}
            <Text>{item[0].name}</Text>
          </Horizontal>
          <Horizontal>
            {item[1].icon}
            <Text>{item[1].name}</Text>
          </Horizontal>
          <Horizontal>
            {item[2].icon}
            <Text>{item[2].name}</Text>
          </Horizontal>
          <Horizontal>
            {item[3].icon}
            <Text>{item[3].name}</Text>
          </Horizontal>
          {item[4] ? (
            <Horizontal>
              {item[4]?.icon}
              <Text>{item[4]?.name}</Text>
            </Horizontal>
          ) : (
            <div />
          )}
        </Content>
      ))}
    </Wrapper>
  );
};

export default Menu;
