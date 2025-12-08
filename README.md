# LearnReact
## 사전 준비 - Javascript
### 1. 변수와 데이터 타입
+ let / const 차이 이해
+ 문자열
+ 숫자
+ 불린
+ 배열
+ 객체

### 2. 함수
+ 함수 선언문
+ 화살표 함수
+ 매개변수
+ 반환값

### 3. 배열 메서드 (React 핵심)
+ map
+ filter
+ find

### 4. 구조 분해 할당
+ 배열 구조 분해
+ 객체 구조 분해

5. 스프레드 연산자
+ 배열 복사
+ 객체 복사
+ 병합 패턴



## 1단계: React 기초
### 1.1 React 기본 개념
+ React가 해결하려는 문제 이해
+ 컴포넌트 기반 개발 개념
+ Virtual DOM 개념
+ JSX 문법 이해
+ 실습: 첫 컴포넌트 만들기

### 1.2 JSX 문법 심화
+ className / htmlFor
+ 중괄호 {} 사용
+ 조건부 렌더링 (&&, 삼항연산자)
+ 실습: 프로필 카드 제작

### 1.3 Props
+ Props 전달
+ Props 구조 분해
+ 재사용 가능한 컴포넌트 제작
+ 실습: 버튼 컴포넌트 만들기

### 1-4 State & 이벤트
+ useState 이해
+ 상태 변화 → UI 업데이트
+ onClick / onChange / onSubmit
+ 이벤트 객체 다루기
+ 실습: 카운터 만들기
+ 실습: 입력 폼 만들기

#### 1단계 실습 - Todo List (기본)
- 할 일 추가
- 목록 렌더링
- 완료 체크
- 삭제 기능

## 2단계: React 심화
### 2.1 useEffect
+ 컴포넌트 생명주기 이해
+ 의존성 배열
+ cleanup 함수
+ 실습: 타이머 만들기

### 2.2 배열 상태 관리
+ 불변성 원칙
+ map으로 리스트 렌더링
+ key props 이해
+ 실습: 동적 리스트 만들기

### 2.3 컴포넌트 구조화
+ 컴포넌트 분리 기준
+ 폴더 구조 설계
+ 컴포넌트 합성 패턴

### 2.4 Custom Hook
+ useXxx 형태로 만들기
+ 로직 재사용

### 2.5 조건부 렌더링 패턴
+ 로딩 처리
+ 에러 처리
+ 빈 상태 처리

#### 2단계 실전 — 날씨 앱
- OpenWeather API 연동
- 검색 기능
- 로딩/에러 상태
- 날씨 아이콘 표시

## 3단계: React Router & API
### 3.1 React Router v6
+ Routes / Route
+ Link / useNavigate
+ 동적 라우팅 (useParams)
+ 실습: 기본 라우팅 구성

### 3.2 API 연동 기초
+ fetch vs axios
+ async/await
+ API 데이터 상태 관리
+ 실습: 데이터 가져오기

### 3.3 CRUD
+ GET(읽기)
+ POST(생성)
+ PUT/PATCH(수정)
+ DELETE(삭제)

#### 3단계 실전 — 블로그 앱
+ 게시글 목록 페이지
+ 게시글 상세 페이지
+ 작성/수정/삭제
+ 페이지 이동 (React Router)

## 4단계: 상태관리 & 고급 패턴
### 4.1Context API
+ Props Drilling 문제 이해
+ Context 기본
+ Provider & Consumer
+ 실습: 테마 스위처 만들기

### 4.2 useReducer
+ 복잡한 상태 관리
+ reducer 패턴
+ dispatch 패턴
+ 실습: 장바구니 만들기

### 4.3 성능 최적화
+ React.memo
+ useMemo
+ 불필요 렌더링 파악
+ 코드 스플리팅
+ React.lazy + Suspense

#### 4단계 실전 — 쇼핑몰 프로젝트
+ 상품 목록
+ 상품 상세
+ 장바구니 (Context)
+ 검색/필터
+ 로그인 상태 관리
+ 반응형 UI

## 5단계: 실무 스킬
### 5.1 실무 필수 도구
CSS Modules
Styled-components
Tailwind CSS
반응형 레이아웃

### 5.2 폼 관리
+ React Hook Form
+ Yup 또는 Zod로 유효성 검사

### 5.3 HTTP 클라이언트 심화
+ Axios 인터셉터
+ 에러 처리 패턴
+ 로딩 관리

### 5.4 배포 
+ Vercel / Netlify 배포
+ 환경변수 설정
+ GitHub Pages 배포
+ README 작성
+ 프로젝트 문서화
+ 반응형 점검

## 프로젝트 실습
1. 영화 검색 앱 (TMDB API)
2. SNS 클론 (Firebase)
3. 대시보드 (Chart.js)



### 설치 
npm create vite@latest my-app -- --template react

#### 로컬 서버 실행
npm run dev

#### 필수 패키지 추가
- 라우터 설치 : $ npm install react-router-dom  
- SCSS : $ npm install -D sass-embedded
- API : $ npm install axios
- Bootstrap : $ npm install react-bootstrap bootstrap

#### 빌드 명령어
npm run build

