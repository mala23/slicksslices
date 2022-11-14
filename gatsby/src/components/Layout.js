import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import 'normalize.css';

export default function Layout({children}) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
