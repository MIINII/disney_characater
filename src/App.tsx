import { useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Router from './routes/Router';
import Header from './components/Header';
import * as klouds from 'klouds';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Kloud = styled.canvas`
  display: flex;
  position: relative;
  height: 50%;
  z-index: -100;
  overflow: hidden;
  opacity: 0.6;
`;

function App() {
  const myCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (myCanvasRef.current) {
      klouds.create({
        selector: myCanvasRef.current,
        layerCount: 4,
        bgColor: [15, 17, 40],
        cloudColor1: [13, 20, 45],
        cloudColor2: [30, 46, 97],
      });
    }
  }, []);

  return (
    <div className='Root'>
      <GlobalStyle />
      <Wrapper>
        <Router />
        <Header />
        <Kloud ref={myCanvasRef} />
      </Wrapper>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css");


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
*{
  box-sizing: border-box;
}
*::selection {
  background-color: #1b2c8b;
  color:#fff
}
body {
  line-height: 1;
  font-family: 'Pretendard', sans-serif;
  background-color: #0f1128;
  color:#fff
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a{
  text-decoration: none;
  color:inherit;
}
`;

export default App;
