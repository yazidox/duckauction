import React from 'react';
import { Layout } from 'antd';

import { AppBar } from '../AppBar';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Footer } from '../Footer';

const { Header, Content } = Layout;

export const AppLayout = React.memo(function AppLayoutImpl(props: any) {
  return (
    <>
      <Layout id={'main-layout'}>
        <Header className="App-Bar">
          <AppBar />
        </Header>
        <Layout id={'width-layout'}>
          <Content>{props.children}</Content>
        </Layout>
        {/*<Footer />*/}
      </Layout>
    </>
  );
});
