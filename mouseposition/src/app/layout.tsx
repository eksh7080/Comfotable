import type { Metadata } from 'next';
import RootStyleRegistry from './emotion';
import { css } from '@emotion/react';
import { globalStyles } from '../../public/styles/GlobalStyle';

export const metadata: Metadata = {
  title: 'mouse position',
  description: 'get the mouse position',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
