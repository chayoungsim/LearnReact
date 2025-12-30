# React + Vite

## 구현할 SNS 기능 (최소 기능)
- 회원가입 / 로그인 (Firebase Authentication)
- 게시글 작성 / 조회
- 게시글 삭제
- 내 게시글만 관리
- 실시간 데이터 반영 (Firestore)

## 기술 스택
- React (Vite 권장)
- Firebase
- Authentication
- Firestore Database
- CSS 또는 SCSS (styled-components도 가능)

### Firebase
Google이 제공하는 모바일 및 웹 애플리케이션 개발 플랫폼입니다. 백엔드 인프라를 직접 구축하고 관리하지 않아도 되도록 다양한 서비스를 제공하는 BaaS(Backend as a Service)입니다.
- 인증 (Authentication)
이메일/비밀번호, 소셜 로그인(Google, Facebook 등), 전화번호 인증 등 다양한 방식의 사용자 인증을 간단하게 구현할 수 있습니다.
- 실시간 데이터베이스 & Firestore
실시간으로 데이터가 동기화되는 NoSQL 데이터베이스입니다. Firestore는 더 발전된 형태로 복잡한 쿼리와 확장성이 뛰어납니다.
- Cloud Storage
사용자가 업로드한 이미지, 동영상 등의 파일을 저장하고 관리할 수 있습니다.
- Cloud Functions
서버 없이 백엔드 로직을 실행할 수 있는 서버리스 함수입니다. 특정 이벤트(데이터 변경, 사용자 생성 등)에 반응하여 자동으로 실행됩니다.
- Hosting
정적 웹사이트와 웹 앱을 빠르게 배포할 수 있는 호스팅 서비스입니다.
- Analytics & Crashlytics
앱 사용 분석과 충돌 보고서를 통해 앱의 성능과 사용자 행동을 파악할 수 있습니다.

** 스타트업이나 개인 개발자들이 빠르게 서비스를 만들 때, 그리고 실시간 기능(채팅, 협업 도구 등)이 필요한 앱을 만들 때 많이 사용됩니다.

1. https://console.firebase.google.com/ 접속 프로젝트 추가 클릭
2. 프로젝트 이름 입력 (예: my-sns-project)
3. 프로젝트 생성 완료
