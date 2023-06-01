import styled, { keyframes } from 'styled-components';
import { ReactComponent as Logo } from '../img/Disney_wordmark.svg';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Header() {
  const [stars, setStars] = useState([]);

  const maxSize = Math.max(window.innerWidth, window.innerHeight);

  const getRandomX = () => Math.random() * maxSize;
  const getRandomY = () => Math.random() * maxSize;
  const randomRadius = () => Math.random() * 0.7 + 0.6;

  useEffect(() => {
    const _size = Math.floor(maxSize / 2);
    const newStars = new Array(_size).fill().map((_, i) => ({
      x: getRandomX(),
      y: getRandomY(),
      radius: randomRadius(),
    }));
    setStars(newStars);
  }, []);

  return (
    <CharHeader>
      <BackSky>
        <Logo fill='white' width='300px' height='150px' style={{ padding: '10px 0' }} />

        <h1
          style={{
            textAlign: 'center',
            fontWeight: '400',
            letterSpacing: '6px',
            textTransform: 'uppercase',
            paddingLeft: '6px',
          }}
        >
          Disney Characters
        </h1>
        <StarSvg>
          {stars.map((star, index) => (
            <Star key={index} cx={star.x} cy={star.y} r={star.radius} />
          ))}
        </StarSvg>
      </BackSky>
    </CharHeader>
  );
}

const CharHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
  overflow: hidden;
`;

const BackSky = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 80px;
  padding: 26px 0;
  width: 100vw;
  height: auto;
  background: linear-gradient(to right, #08153b, #0f1128);
  opacity: .9;
  backdrop-filter: blur(3px);
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

const StarSvg = styled.svg`
  width: 100vw;
  height: 100vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${moveStar} 200s linear infinite;
`;

const Star = styled.circle`
  fill: #fff;
  stroke: none;
  stroke-width: 0;
`;
