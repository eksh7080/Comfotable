import { css } from '@emotion/react';
import { Fragment } from 'react';

const layout = {
  position: 'absolute',
  backgroundColor: 'white',
  border: '1px solid black',
  borderRadius: '6px',
  padding: '2em',
  display: 'none',
};

const font = {
  fontSize: '1.2em',
  fontWeight: '700',
};

const CustomModal = () => {
  return (
    <Fragment>
      <section css={{ ...layout }} id="absolute">
        <h1 css={{ ...font }}>절대경로 마우스 컴포넌트</h1>
      </section>
      <section css={{ ...layout }} id="relative">
        <b css={{ ...font }}>상대경로 마우스 컴포넌트</b>
      </section>
    </Fragment>
  );
};

export default CustomModal;
