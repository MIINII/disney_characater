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
  font-size: 32px;
  font-weight: 700;
`;

const CharDesc = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  padding: 6px 0;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: underline;
`;

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

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '70vw',
                  marginTop: '32px',
                  padding: '30px',
                  gap: '10px',
                  background: 'rgba(0,0,0,.3)',
                }}
              >
                <h4
                  style={{
                    fontSize: '22px',
                    fontWeight: '600',
                    marginBottom: '12px',
                    background: 'white',
                    padding: '12px 18px',
                    color: '#1b2c8b',
                    borderRadius: '30px',
                  }}
                >
                  🎬Films🎥
                </h4>

                <ul
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    marginTop: '12px',
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
