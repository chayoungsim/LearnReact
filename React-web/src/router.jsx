import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';

// 라우팅할 페이지 컴포넌트들을 import 합니다.
// TODO: 아래 페이지 컴포넌트들을 실제 파일 경로에 맞게 생성해야 합니다.
import Home from './pages/Home';
import Medicine from './pages/Medicine';
import Setting from './pages/Setting';

const router = createBrowserRouter([
  {
    // Layout 컴포넌트를 최상위 경로에 배치하여 모든 페이지의 공통 레이아웃으로 사용합니다.
    path: '/',
    element: <Layout />,
    // errorElement: <NotFound />, // TODO: 404 페이지를 추가하면 좋습니다.
    children: [
      {
        index: true, // path: '/' 와 동일하며, 부모 경로의 기본 자식 라우트를 의미합니다.
        element: <Home />,
      },
      {
        path: 'medicine',
        element: <Medicine />,
      },
      {
        path: 'setting',
        element: <Setting />,
      },
    ],
  },
]);

export default router;
