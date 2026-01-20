import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from './router.jsx';
import './assets/styles/style.css';
import './App.scss'


// TanStack Query 클라이언트 생성
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* QueryClientProvider로 앱을 감싸 TanStack Query를 전역으로 사용 가능하게 합니다. */}
    <QueryClientProvider client={queryClient}>
      {/* RouterProvider를 통해 createBrowserRouter로 생성된 라우터를 앱에 적용합니다. */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
