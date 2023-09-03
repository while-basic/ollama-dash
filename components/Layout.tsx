import React from 'react';
import Head from 'next/head';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Text Adventure Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;