# Weather App
* Demo : <a href="https://chayoungsim.github.io/LearnReact/Weather/" target="_blank">https://chayoungsim.github.io/LearnReact/Weather/</a>

## 2단계 실습  날씨앱
- 앱이실행되자마자 현재 위치의 날씨 정보가 보인다
- 5개의 버튼 현재위치, 다른도시
- 도시버튼을 클릭할때마다 도시별 날씨가 나온다
- 현재위치 버튼을 누리면 다시 현재 위치 기반의 날씨가 나온다
- 데이터를 가져오는동안 로딩스피너가 돈다



### Geolocation API & OpenWeatherMap API
- 현재위치 가져오기 설명  https://www.w3schools.com/html/html5_geolocation.asp
- https://openweathermap.org/api
- https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

### 아이콘
- const iconUrl = iconCode ? `https://openweathermap.org/img/wn/${iconCode}@2x.png` : null;
- {iconUrl && <img src={iconUrl} alt={weather.description} />}

### 스피너
- https://www.davidhu.io/react-spinners/
- react-spinners
- npm install react-spinners
- import { ClipLoader } from "react-spinners";

### 설치
 - bootstrap : npm install react-bootstrap bootstrap
 - SCSS : npm install -D sass-embedded
 - 스피너 : npm install react-spinners
 - Axios : npm install axios (API를 처리하는 가장 일반적인 방법)

#### fetch()는 브라우저 내장 API로, 지정한 URL에서 데이터를 요청합니다.
    await를 붙이면 fetch가 완료될 때까지 기다렸다가 결과(Response 객체)를 res 변수에 저장합니다.

#### axios는 Promise 기반 HTTP 클라이언트입니다.
    즉, fetch()처럼 API 서버와 통신(데이터 요청·전송)을 도와주는 라이브러리입니다. fetch()보다 편리하고 가독성이 좋아서 React 프로젝트에서 거의 표준처럼 사용됩니다.








