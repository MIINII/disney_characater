import { BrowserRouter, Route, Routes, createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from './routes/Home';

// array 형식으로
const router = createBrowserRouter([
  {
    // 전체 route들의 컨테이너
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
        // errorElement: <ErrComponent />,
      },
    ],
    // errorElement: <NotFound />,
  },
]);

export default router;
