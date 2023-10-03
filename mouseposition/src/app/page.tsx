'use client';
import { css } from '@emotion/react';
import CustomModal from '../../components/CustomModal';
import { Fragment, useState } from 'react';

const layout = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  height: '100vh',
};

const btnReset = {
  backgroundColor: 'none',
  outLine: 'none',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '6px',
};

const Home = () => {
  const [getPosition, setGetPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMousePosition = (e: React.MouseEvent<HTMLDivElement>) => {
    setGetPosition({ x: e.clientX, y: e.clientY });
  };

  const onToggleModal = () => {
    const id = document.getElementById('modal');

    if (id) {
      id.style.display = 'block';
      id.style.top = `${getPosition.y}px`;
      id.style.left = `${getPosition.x}px`;
    }
  };

  return (
    <>
      <div css={{ ...layout }} onMouseMove={(e) => handleMousePosition(e)} onClick={onToggleModal}>
        <div>{`(x == ${getPosition.x} y == ${getPosition.y})`}</div>
        <div>
          <b>relative mouse position </b>
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
      </div>
      <CustomModal />
    </>
  );
};

export default Home;
