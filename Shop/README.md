# 쇼핑몰 제품리스트 상세
- 유저는 메뉴와 상품들을 볼 수 있다.
- 유저는 로그인을 할 수 있다.
- 유저는 상품디테일을 보기 위해 로그인을 해야한다.
- 로그인한 유저는 상품디테일정보를 볼 수 있다.
- 유저는 상품을 검색할 수 있다.
- 유저는 로그아웃할 수 있다.

## 전체 상품 불러오기  json-server 설치  (로컬에서 서버사용)
- https://www.npmjs.com/package/json-server
- 0. local root에 db.json 파일을 업데이트
- 1. 설치 npm install json-server
- 2. 실행 json-server --watch db.json --port 4000

### Endpoints:
http://localhost:4000/products
http://localhost:4000/categories


## 설치
- npm install react-bootstrap bootstrap
- npm i @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
- npm i @fortawesome/react-fontawesome
- npm install react-router-dom
- npm install -D sass-embedded

### useSearchParams
React Router의 Hook으로, URL의 쿼리 스트링(query string)을 읽고 수정할 수 있게 해줍니다.
import { useSearchParams } from 'react-router-dom';
const [searchParams, setSearchParams] = useSearchParams();
// URL: /products?category=electronics&sort=price
// 쿼리 파라미터 읽기
const category = searchParams.get('category'); // 'electronics'

### Axios
- Promise 기반으로 then과 catch를 사용하거나, async/await 문법으로 비동기 처리를 쉽게 구현할 수 있다.
- Axios는 Promise 기반으로 작동하므로, async/await 문법과 함께 사용하여 응답을 기다리는 것이 일반적입니다. 
* 설치 : npm install axios 
* 모듈 가져오기 : import axios from 'axios'
* 구조 : const response = await axios.post(url, data, options);

### useNavigate 
- v6이상에서만 사용가능
* import { useNavigate } from 'react-router-dom' 
* const navigate = useNavigate()
  navigate('/test') // /test url로 이동

### useSearchParams  
- React Router에서 URL 쿼리 스트링(e.g., ?key=value&key2=value2)을 읽고 변경하기 위해 사용되는 훅 입니다.
- searchParams 객체와 setSearchParams 함수를 반환하며, 이를 통해 쿼리 파라미터 조회, 추가, 수정, 삭제를 쉽게 할 수 있습니다.
* import { useSearchParams } from 'react-router-dom';
* const [searchParams, setSearchParams] = useSearchParams();

### URLSearchParams  객체의 속성


## 배포하기
* my-json 사이트🏹 : https://my-json-server.typicode.com/