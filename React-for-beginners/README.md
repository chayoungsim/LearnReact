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
