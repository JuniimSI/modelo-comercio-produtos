import React from 'react';
import Layout from '../components/Layout';
import '../components/Navbar/Navbar.scss';
import '../components/Button/Button.scss';
import '../components/Product/Product.scss';
import '../components/Home/Home.scss';
import '../components/Contactus/Contactus.scss';
import '../components/Footer/Footer.scss';
import '../styles/colors.scss';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
  }
  html, body {
    min-height: 100vh;
  }
`
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
