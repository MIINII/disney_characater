import { useQuery } from 'react-query';
import { fetchChar } from './../api';
import styled from 'styled-components';

export default function Home() {
  const { isLoading, data } = useQuery('allChar', fetchChar);

  return (
    <>
      {isLoading ? (
        <Loader>로딩중...</Loader>
      ) : (
        <CharList>
          {data.slice(0, 100).map((character) => (
            <CharWrap key={character.id}>
              <CharImg src={`${character.imageUrl}`} />
              <CharName>{character.name}</CharName>
            </CharWrap>
          ))}
        </CharList>
      )}
    </>
  );
}

const Loader = styled.h2`
  text-align: center;
  font-size: 32px;
`;

const CharList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 70%;
  scroll-snap-type-y: mandatory;
`;

const CharWrap = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding: 0 20px;
`;

const CharImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
`;

const CharName = styled.h2`
  font-size: 18px;
  padding: 18px 0;
`;
