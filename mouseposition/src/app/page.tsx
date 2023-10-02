'use client';
import { css } from '@emotion/react';
import CustomModal from '../../components/CustomModal';

const custom = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
};

const btnReset = {
  backgroundColor: 'none',
  outLine: 'none',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '6px',
};

const Home = () => {
  return (
    <section css={{ ...custom }}>
      <div>
        <b>relative mouse position</b>
        <article>
          <button type="button" css={{ ...btnReset }}>
            relative
          </button>
        </article>
      </div>
      <div>
        <b>absolute mouse position</b>
        <article>
          <button type="button" css={{ ...btnReset }}>
            absolute
          </button>
        </article>
      </div>
      <CustomModal />
    </section>
  );
};

export default Home;
