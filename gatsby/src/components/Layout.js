import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';

export default function Layout({children}) {
  return (
    <>
      <GlobalStyles />
      <Nav />
      {children}
      <Footer />
    </>
  );
}
