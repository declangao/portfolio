import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
        <title>Declan Gao | Frontend Developer</title>
      </Head>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </Layout>
  );
}
