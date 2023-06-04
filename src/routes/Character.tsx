import { useQuery } from 'react-query';
import { fetchChar, fetchCharDetail } from '../api';
import { useParams } from 'react-router';
import styled from 'styled-components';

interface IChar {
  id: string;
  films: string[];
  name: string;
  imageUrl: string;
  sourceUrl: string;
}

export default function Character() {
  const { id } = useParams();
  const { isLoading: detailLoading, data: detailData } = useQuery<IChar>(['detail', id], () =>
    fetchCharDetail(id!)
  );

  return (
    <>
      {detailLoading ? (
        <span>로딩중</span>
      ) : (
        <Wrap>
          {/* <PreChar>{(data.id - 1)}</PreChar> */}
          <MainChar>
            <ImgWrap>
              <CharImg src={`${detailData?.imageUrl}`} />
            </ImgWrap>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '32px',
              }}
            >
              <CharName>{detailData?.name}</CharName>

              <div style={{ display: 'flex', gap: '10px' }}>
                <ul
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    marginTop: '20px',
                  }}
                >
                  {detailData?.films.map((film: string) => (
                    <CharDesc>{film}</CharDesc>
                  ))}
                </ul>
              </div>
            </div>
          </MainChar>
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

const PreChar = styled(Wrap)`
  opacity: 0.7;
`;

const MainChar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const CharDesc = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 300;
`;
