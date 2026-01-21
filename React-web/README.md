# 모바일 웹 구성

- 해더 고정
- 푸터 메뉴 고정
- 메뉴오픈, 링크 이동
- Router.js 구성으로 메뉴 분리
- 메인에 Swiper 삽입

# React 18 + React Router + TanStack Query

## React Router v6.4+ 구성

```javascript
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";

<RouterProvider router={router} />;
```

- 전통적인 <BrowserRouter> 대신 사용
- Data Router 방식 (loader, action, errorElement 지원)

## TanStack Query (react-query)

```javascript
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

onst queryClient = new QueryClient()  //QueryClient 생성
```

- 서버 상태 캐싱
- 요청 중복 제거
- 자동 재요청(refetch)
- 로딩/에러 상태 관리

```javascript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Create a QueryClient instance for react-query
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </StrictMode>,
);
```
