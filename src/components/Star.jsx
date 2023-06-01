import styled, { keyframes } from 'styled-components';

export default function Star() {
  const maxSize = Math.max(window.innerWidth, window.innerHeight);
  const getRandomX = () => Math.random() * maxSize;
  const getRandomY = () => Math.random() * maxSize;
  const randomRadius = () => Math.random() * 0.7 + 0.6;

  const makeStars = () => {
    const $sky = document.querySelector('.sky');
    const size = Math.floor(maxSize / 2);
j
    const htmlDummy = new Array(size)
      .fill()
      .map((_, i) => {
        return `<circle class='star'
        cx=${getRandomX()}
        cy=${getRandomY()}
        r=${randomRadius()}
        className="star" />`;
      })
      .join('');

    $sky.innerHTML = htmlDummy;
  };

  return (
    <BackSky>
      <Sky className='sky' onAnimationEndCapture={makeStars}></Sky>
    </BackSky>
  );
}

const BackSky = styled.div`
  width: 100vw;
  height: auto;
  position: relative;
  background: linear-gradient(to right, #111, #0e0f19);
  overflow: hidden;
`;

const moveStar = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const Sky = styled.svg`
  width: 100vw;
  height: 100vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${moveStar} 240s linear infinite;
`;
