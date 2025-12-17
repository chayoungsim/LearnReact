import React, { useState } from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import './MoviePage.css';

//경로2가지
// navq클릭 = > popularMovie
// 키워드 입력 => keyword


const MoviePage = () => {

  const [query, setQuery] = useSearchParams()
  const [page, setPage] = useState(1)
  const keyword = query.get('q')
  const {data, isLoading, isError, error} = useSearchMovieQuery({keyword,page});

  console.log("page",data);

  const handlePageClick = ({selected}) => {
    setPage(selected + 1)
  } 

  if(isLoading) {
    return <div>로딩중...</div>

  }
 if(isError) {
    return <div>{error.message}</div>
 }

  return (
    <Container>
      <Row>
        <Col lg={4} md={6} xs={12}></Col>
        <Col lg={8} xs={12}>
          <Row>            
              {data?.results.map((movie,index) => (
                <Col key={index} lg={4} xs={12}>
                  <MovieCard key={index} movie={movie} />                
                </Col>
              ))}
          </Row>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages} //전체페이지
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default MoviePage