import type { Metadata } from 'next';
import type { AppProps } from 'next/app';
import GlobalStyles from '@/public/styles/GlobalStyle';

export const metadata: Metadata = {
  title: 'oauth login',
  description: 'make oauth login',
};

export default function App({ Component, router, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
