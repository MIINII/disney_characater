import { useQuery } from 'react-query';
import { fetchCharDetail } from '../api';
import { useParams } from 'react-router';
import styled from 'styled-components';

export default function Character() {
  const { id } = useParams();
  const { isLoading, data } = useQuery(['detail', id], () => fetchCharDetail(id));
  console.log('🚀 ⁝ Character ⁝ data:', data);

  return (
    <>
      {isLoading ? (
        <span>로딩중</span>
      ) : (
        <Wrap>
          <ImgWrap>
            <CharImg src={`${data.imageUrl}`} />
          </ImgWrap>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '32px' }}>
            <CharName>{data.name}</CharName>
          </div>
        </Wrap>
      )}
    </>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CharImg = styled.img`
  box-sizing: border-box;
  width: 300px;
  object-fit: cover;
`;

const ImgWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 200px;
  height: 200px;
  border: 0px;
  border-radius: 20px;
  padding: 0px;
`;

const CharName = styled.h3`
  font-size: 30px;
  font-weight: 700;
`;
