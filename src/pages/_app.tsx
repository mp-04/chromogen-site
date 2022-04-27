import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';
import favicon from '../public/chromogen-logo.png';
import '../fonts/GreycliffCF/styles.css';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href={favicon.src} />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
