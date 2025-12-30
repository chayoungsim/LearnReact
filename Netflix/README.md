# Netflix
- 유저는 배너를 볼 수 있다.
- 유저는 가장 인기있는 영화 리스트, 가장 평점 좋은 영화 리스트, 상영 예정작 리스트를 볼 수 있다.
- 각각의 영화 리스트는 슬라이드 형태로 넘길 수 있다.
- 유저는 영화에 마우스를 올려두면 영화의 제목과 장르, 평점, 인기도, 청불여부를 볼 수 있다.
- 유저는 영화 카드를 클릭하면 영화의 상세 정보를 볼 수 있다.
- 상세 정보에는 포스터, 영화 제목, 평점, 인기도 청불여부, 줄거리 요약, 예산, 날짜, 시간, 리뷰, 예고편, 관련영화 등이 있다.
- 유저는 영화를 검색할 수 있다.
- 유저는 영화를 인기도순으로 정렬할 수 있다.
- 유저는 장르별로 영화를 필터링 할 수 있다.
- Movies 페이지에 페이지네이션을 적용한다.
* DEMO : [Netflix](https://sim-react-netfl.netlify.app/)


## API
* https://developer.themoviedb.org/reference/intro/getting-started
* https://developer.themoviedb.org/reference/getting-started
* TMDB : https://www.themoviedb.org/?language=ko

### 설치
- react-router-dom
- react-bootstrap bootstrap
- axios
- react-query  
  npm i @tanstack/react-query 
  npm i @tanstack/react-query-devtools

#### Axios 
- https://axios-http.com/kr/docs/instance


### 리엑트 쿼리
- react-query : https://tanstack.com/query/latest
- 서버상태관리
- 캐시관리

### 영화 슬라이드 컴포넌트 
- react-multi-carousel : https://www.npmjs.com/package/react-multi-carousel

### react-paginate
- https://www.npmjs.com/package/react-paginate

### react-youtube



### API
- Top Rated : https://developer.themoviedb.org/reference/movie-top-rated-list
- Popular : https://developer.themoviedb.org/reference/movie-popular-list
- Upcoming : https://developer.themoviedb.org/reference/movie-upcoming-list
- Now Playing : https://developer.themoviedb.org/reference/movie-now-playing-list
- Search : https://developer.themoviedb.org/reference/keyword-movies
- 영화상세 : https://developer.themoviedb.org/reference/movie-details
- 리뷰 : https://developers.themoviedb.org/3/movies/get-movie-reviews
- 장르 : https://developer.themoviedb.org/reference/genre-movie-list
- 추천영화 : https://developers.themoviedb.org/3/movies/get-movie-recommendations
- 관련영화 : https://api.themoviedb.org/3/movie/{movie_id}/similar


### sort
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

## Suspense