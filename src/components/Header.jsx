import styled from 'styled-components';
import { ReactComponent as Logo } from '../img/Disney_wordmark.svg';
import Star from './Star';

export default function Header() {
  return (
    <CharHeader>
      <Star />
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
    </CharHeader>
  );
}

const CharHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  width: 100%;
  top: 0;
  margin-bottom: 80px;
  padding: 26px 0;
  background: linear-gradient(to right, #111, #0e0f19);
  opacity: 0.7;
  backdrop-filter: blur(3px);
  overflow: hidden;
`;
