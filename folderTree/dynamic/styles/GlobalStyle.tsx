import { css, Global } from '@emotion/react';

const globalStyles = (
  <Global
    styles={css`
      html,
      body,
      div,
      span,
      h1,
      h2,
      p,
      a,
      address,
      img,
      small,
      strong,
      i,
      dl,
      dt,
      dd,
      ul,
      li,
      form,
      label,
      article,
      figure,
      footer,
      header,
      section {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
      }

      article,
      figure,
      footer,
      header,
      menu,
      nav,
      section {
        display: block;
      }

      body {
        line-height: 1;
      }

      ol,
      ul,
      li {
        list-style: none;
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      input,
      select {
        border: 0;
      }

      a,
      a:visited,
      a:link,
      a:active {
        color: #000;
        text-decoration: none;
      }

      html {
        font-size: 62.5%;
        box-sizing: border-box;
      }

      .setting.NAVER_SEARCH_AD {
        background: url('/images/social/naver.png') no-repeat center center/75%;
        border: 1px solid #32cd32;
        border-radius: 0.6rem;
        width: 2.4rem;
        height: 2.4rem;
        display: block;
      }
      .setting.FACEBOOK {
        background: url('/images/social/facebook.png') no-repeat center center/75%;
        border: 1px solid #87cefa;
        border-radius: 0.6rem;
        width: 2.4rem;
        height: 2.4rem;
        display: block;
      }
    `}
  />
);

export default globalStyles;
