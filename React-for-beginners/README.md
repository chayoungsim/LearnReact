# React for beginners
### [영상강의] (https://nomadcoders.co/react-for-beginners/lobby)


## memo (컴포넌트 재랜더링)
함수형 컴포넌트의 불필요한 재렌더링을 방지하기 위한 최적화 도구입니다.

## useMemo (객체)
연산 비용이 큰 계산 결과를 메모이제이션하여 불필요한 재계산을 방지하는 React 훅입니다.
컴포넌트가 리렌더링되더라도 의존성 값이 바뀌지 않으면 이전 결과를 그대로 재사용합니다.

## useCallback (함수), 

## React Compiler
React Compiler는 컴파일 시점에 컴포넌트를 분석하여, 필요한 부분만 자동으로 메모이제이션한다.
정석적인 함수형 React 코드일수록 효과가 큽니다.
- React 규칙을 정확히 지키는 코드 작성
- 불필요한 수동 memo 최소화
- 가독성 중심의 선언형 코드 유지


### PropTypes
React 컴포넌트에 전달되는 props의 타입을 런타임에서 검증하기 위한 도구입니다.
TypeScript를 사용하지 않는 프로젝트에서 props 계약을 명확히 하고 오류를 조기에 발견하는 데 목적이 있습니다.


### Framer Motion
React 전용 애니메이션 라이브러리로,
CSS 애니메이션이나 JS 타이밍 제어 없이 컴포넌트 단위 애니메이션을 선언적으로 구현할 수 있는 것이 특징입니다.
- React 친화적 (JSX 기반)
- 상태(state) 변화에 따른 자연스러운 애니메이션
- 접근성 및 퍼포먼스 고려 설계
- GSAP 대비 진입 장벽이 낮음

* npm install framer-motion
* import { motion } from "framer-motion";

### Coin Tracker

https://api.coinpaprika.com/v1/tickers

--------------------------------------------------------------------------------------

## React 애플리케이션을 개발할 때 자주 반복되는 패턴, 개념이해

### 반복되는 패턴, 개념, 또는 실무에서 유용한 작은 단위

1. HTML을 “찍어내지 않는다”는 개념  
```javascript
<li className={isActive ? 'on' : ''}>메뉴</li>
```

2. 반복 마크업은 map()으로 처리
```javascript
{menuList.map(item => (
  <li key={item.id}>{item.title}</li>
))}
```

###  동작을 담당하는 핵심 
1. useState – UI 상태 제어의 출발점
```javascript
const [open, setOpen] = useState(false);

<button onClick={() => setOpen(v => !v)}>열기</button>
```
2. 이전 상태를 기반으로 업데이트하는 습관 : 애니메이션, 연속 클릭, 비동기 처리에서 오류 방지
```javascript 
    setOpen(prev => !prev)
```
3. 이벤트는 “함수 참조”로 전달 : JSX 안에서는 “실행”이 아닌 “전달”
```javascript
<button onClick={() => setOpen(true)} />
```
4. 접근성을 고려한 JSX 작성 : aria 값도 state와 동기화, React는 접근성 친화적 구조를 만들기 쉬움
```javascript
<button
  aria-expanded={open}
  aria-controls="menu"
>
```
5. 조건부 렌더링 패턴 : 디바이스 분기, 노출 제어가 명확, display:none 남발 방지
```javascript
{open && <nav>...</nav>}
{isMobile ? <MobileMenu /> : <PcMenu />}
```

### 컴포넌트 분리 감각을 만드는 Bits : HTML include 개념과 매우 유사, 처음엔 작게 나누는 것이 정답
1. “디자인 블록 = 컴포넌트” 사고
```javascript
<Header />
<MainVisual />
<CardList />
<Footer />
```

2. Props는 “외부에서 내려오는 데이터”  : 컴포넌트는 하드코딩하지 않는다
```javascript
<Card title="프로젝트 A" />

function Card({ title }) {
  return <h3>{title}</h3>;
}
```
### 실무
1. useEffect는 “DOM 제어 / 외부 영향”에만 사용 : GSAP, Swiper, 이벤트 바인딩에 사용
```javascript
useEffect(() => {
  window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener('scroll', onScroll);
}, []);
```

2. React.memo는 “나중에” : 초반에는 쓰지 않는다, 렌더링 문제를 체감한 뒤 사용

3. DOM 조작 ❌ → 상태 변경 ⭕
```javascript
element.classList.add('on'); // ❌
setActive(true); // ⭕
```

4. 결과를 만들지 말고 “조건”을 만든다 : className={active ? 'on' : ''}


### GSAP / Swiper를 React 환경에서 사용하기

1. DOM 직접 접근은 ref로만 한다
```javascript
document.querySelector('.slide');// ❌
const slideRef = useRef(null);
<div ref={slideRef}></div>
```

2. 초기화는 useEffect / useLayoutEffect에서만 : GSAP → useLayoutEffect 권장 / Swiper → useEffect 권장
```javascript
useLayoutEffect(() => {
  gsap.to(ref.current, { opacity: 1 });
}, []);
```
- 렌더링 이후에만 DOM 존재
- 렌더 중 애니메이션 실행 ❌

3. gsap.context()는 필수
```javascript
useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.to('.box', { x: 100 });
  }, containerRef);

  return () => ctx.revert();
}, []);
```
##### 왜 중요한가
- 컴포넌트 unmount 시 자동 정리
- StrictMode 이중 실행 문제 해결
- 메모리 누수 방지

4. ScrollTrigger는 반드시 cleanup : 또는 gsap.context 사용 시 자동 처리
```javascript
return () => {
  ScrollTrigger.getAll().forEach(t => t.kill());
};
```

5. state로 애니메이션을 “제어”하지 않는다 : React state = UI 상태 / GSAP = 표현(표현 계층) / 서로 역할 분리

6. 접근성 대응 : prefers-reduced-motion 대응
prefers-reduced-motion은 사용자가 운영체제 설정에서 애니메이션 감소를 선호한다고 표시했을 때 이를 감지하는 CSS 미디어 쿼리입니다.
```javascript
const mm = gsap.matchMedia();
mm.add('(prefers-reduced-motion: no-preference)', () => {
  gsap.to(...);
});
```

7. Swiper React 컴포넌트 사용이 기본 : lifecycle 자동 관리, ref 충돌 최소화, 업데이트 안정성
```javascript
import { Swiper, SwiperSlide } from 'swiper/react';
```

8. Swiper 인스턴스는 ref로 관리
```javascript
const swiperRef = useRef(null);
<Swiper onSwiper={(swiper) => (swiperRef.current = swiper)} />

swiperRef.current.slideNext();
```

9. autoplay / video 제어는 Swiper 이벤트 기반
```javascript
onSlideChange={(swiper) => {
  // 현재 슬라이드에 맞춰 제어
}}
```

10. Swiper + video 혼합 시 핵심 : video 재생 종료 → slideNext() /  이미지 → timeout
타이머는 useRef / setTimeout 남용 ❌

11. GSAP + Swiper 함께 쓸 때의 위험 포인트
- Swiper 슬라이드는 “움직인다” GSAP target은 항상 슬라이드 내부 요소 / .swiper-slide 직접 제어 ❌
- ScrollTrigger + Swiper 동시 사용 주의 / ScrollTrigger refresh 시점 관리 /ScrollTrigger.refresh() / Swiper 초기화 후 refresh 실행

12. React StrictMode
- StrictMode에서는 effect가 두 번 실행된다
- GSAP → context / Swiper → destroy 확인 : return () => swiper?.destroy(true, true);

### StrictMode가 하는 일
1. 컴포넌트 이중 렌더링 (React 18+) : StrictMode는 컴포넌트를 의도적으로 두 번 렌더링하여 순수하지 않은 렌더링을 찾아냅니다.
