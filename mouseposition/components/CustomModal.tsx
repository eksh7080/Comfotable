import { css } from '@emotion/react';

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
    <section css={{ ...layout }} id="modal">
      <h1 css={{ ...font }}>마우스 컴포넌트</h1>
    </section>
  );
};

export default CustomModal;
