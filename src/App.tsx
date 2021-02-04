import React from 'react';
import { Header, Footer, Menu, WrapperCards } from '~/components';
import { Content } from '~/styles';

function App() {
  return (
    <>
      <Header />
      <Content>
        <Menu />
        <WrapperCards />
      </Content>
      <Footer />
    </>
  );
}

export default App;
