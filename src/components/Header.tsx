import styled, { keyframes } from 'styled-components';
import { useMemo, useState, useEffect } from 'react';

import { ReactComponent as DisneyWordmark } from '../img/DisneyWordmark.svg';
import { Link } from 'react-router-dom';

interface Star {
  x: number;
  y: number;
  radius: number;
}

const CharHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  z-index: 10000;
  top: 0;
  width: 100%;
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
  background: linear-gradient(to bottom, #0d1c48, #0f1128);
  opacity: 0.9;
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
  overflow: hidden;
`;

const SmallStar = styled.circle`
  fill: #fff;
  stroke: none;
  stroke-width: 0;
`;

export default function Header() {
  const [stars, setStars] = useState<Star[]>([]);
  const [maxSize, setMaxSize] = useState(Math.max(window.innerWidth, window.innerHeight));

  const getRandomX = useMemo(() => () => Math.random() * maxSize, [maxSize]);
  const getRandomY = useMemo(() => () => Math.random() * maxSize, [maxSize]);
  const randomRadius = () => Math.random() * 0.7 + 0.6;

  useEffect(() => {
    const handleResize = () => {
      setMaxSize(Math.max(window.innerWidth, window.innerHeight));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const _size = Math.floor(maxSize / 2);
    const newStars: Star[] = new Array(_size).fill(0).map((_, i) => ({
      x: getRandomX(),
      y: getRandomY(),
      radius: randomRadius(),
    }));
    setStars(newStars);
  }, [maxSize, getRandomX, getRandomY]);

  return (
    <CharHeader>
      <BackSky>
        <DisneyWordmark fill='white' width='300px' height='130px' style={{ padding: '10px 0' }} />

        <h1
          style={{
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: '600',
            letterSpacing: '6px',
            textTransform: 'uppercase',
            paddingLeft: '6px',
            zIndex: '100',
          }}
        >
          Disney Characters
        </h1>

        <StarSvg>
          {stars.map((star, index) => (
            <SmallStar key={index} cx={star.x} cy={star.y} r={star.radius} />
          ))}
        </StarSvg>
      </BackSky>
    </CharHeader>
  );
}
