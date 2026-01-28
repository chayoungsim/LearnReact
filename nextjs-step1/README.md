## 프로젝트생성

npx create-next-app@latest nextjs-step1

```bash
✔ TypeScript?        → Yes
✔ ESLint?            → Yes
✔ Tailwind CSS?      → No
✔ src/ directory?    → Yes
✔ App Router?        → Yes
✔ import alias?      → Yes
```
```bash
cd nextjs-step1
npm run dev
```
👉 http://localhost:3000 확인

page.tsx는 기본적으로 Server Component
Server Component에서는 async / await 사용 가능
데이터는 렌더링 전에 서버에서 준비

### Server Component (기본값)
- 데이터 fetch
- 정적 UI
- 마크업 중심
- SEO / 성능 최적화

### Client Component
- 사용자 입력
- 클릭 / 상태 변화
- 애니메이션
- 브라우저 API 접근