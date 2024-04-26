import type { Metadata } from 'next';
import type { AppProps } from 'next/app';
import GlobalStyles from '@/public/styles/GlobalStyle';
import Navigation from '@/components/nav/navigation';

export const metadata: Metadata = {
  title: 'oauth login',
  description: 'make oauth login',
};

export default function App({ Component, router, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
