This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# 프로젝트 생성
```bash
npx create-next-app@latest next-study
cd next-study
npm run dev
```

## GSAP 사용
```bash
npm install gsap    // 별도 플러그인(ScrollTrigger 등)도 gsap 패키지 안에 포함되어 있습니다.
```
Next.js는 SSR(Server Side Rendering) 구조이므로
GSAP은 반드시 클라이언트에서만 실행되어야 합니다.

### 반드시 지켜야 할 것
1. use client 선언
2. useEffect 또는 useLayoutEffect 안에서만 실행
3. DOM 접근은 ref 사용

```javasccript
useLayoutEffect(() => {
  // ① DOM 준비 체크
  // ② gsap.context로 스코프 제한
  // ③ fromTo 애니메이션 2개 실행
  // ④ cleanup 처리
}, []);
```

- useLayoutEffect → DOM 그려진 직후 실행
- gsap.context → 해당 컴포넌트 범위로 애니메이션 제한
- ScrollTrigger → 스크롤 위치에 따라 제어
- ctx.revert() → 페이지 이동 시 정리