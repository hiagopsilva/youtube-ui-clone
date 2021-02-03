import React from 'react';
import { Header, Footer, Menu } from '~/components';
import { Content } from '~/styles';

function App() {
  return (
    <>
      <Header />
      <Content>
        <Menu />
        Youtube
      </Content>
      <Footer />
    </>
  );
}

export default App;
