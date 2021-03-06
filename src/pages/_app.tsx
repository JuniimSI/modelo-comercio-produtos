import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import '../components/Navbar/Navbar.scss';
import '../components/Button/Button.scss';
import '../components/Product/Product.scss';
import '../components/Home/Home.scss';
import '../components/Contactus/Contactus.scss';
import '../components/Footer/Footer.scss';
import '../components/Services/Services.scss';
import '../components/CardRedondo/CardRedondo.scss';
import '../components/SeparatorZ/SeparatorZ.scss';
import '../components/PanelProdutos/PanelProdutos.scss';
import '../components/Location/Location.scss';

import '../styles/colors.scss';
import '../styles/functions.scss';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #c4eeff;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
  }
  html, body {
    //overflow-x: hidden;
    min-height: 100vh;
    max-width: 100vw;
  }
`
function MyApp({ Component, pageProps }) {
  return (
    
    <Layout>
      <Head>
        <title>Model</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Monoton" rel="stylesheet" />      
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
