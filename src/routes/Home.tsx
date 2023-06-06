import { useQuery } from 'react-query';
import { fetchChar } from '../api';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface IChars {
  id: number;
  name: string;
  imageUrl: string;
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
  height: 70vh;
  width: 70%;
  position: absolute;
  top: 24%;
  z-index: 1000;
  scroll-snap-type-y: mandatory;
  scroll-snap-align: start;
  gap: 20px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CharWrap = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;

  border-radius: 30px;
  transition: all 0.3s ease-in-out 0s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    transform: scale(1.05);

    /* transition: all 0.3s ease-in-out 0s; */
  }
`;

const CharImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 100%;
`;

const CharName = styled.h2`
  @import url('https://fonts.cdnfonts.com/css/new-walt-disney-font');
  @font-face {
    font-family: 'New Walt Disney Font';
    font-style: normal;
    font-weight: 400;
    src: local('New Walt Disney Font'),
      url('https://fonts.cdnfonts.com/s/36368/New Walt Disney.woff') format('woff');
  }
  font-family: 'New Walt Disney Font', sans-serif;
  font-size: 32px;
  padding: 18px 0;
  text-align: center;
`;

export default function Home() {
  const { isLoading, data } = useQuery('allChar', fetchChar);

  return (
    <>
      {isLoading ? (
        <Loader>로딩중...</Loader>
      ) : (
        <CharList>
          {data.slice(0, 100).map((character: IChars) => (
            <div key={character.id}>
              <Link to={`/character/${character.id}`}>
                <CharWrap>
                  <CharImg src={`${character.imageUrl}`} />
                  <CharName>{character.name}</CharName>
                </CharWrap>
              </Link>
            </div>
          ))}
        </CharList>
      )}
    </>
  );
}
