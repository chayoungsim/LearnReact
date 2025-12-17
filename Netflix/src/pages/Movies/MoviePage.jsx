import React, { useState, useMemo } from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import './MoviePage.scss';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';

//경로2가지
// navq클릭 = > popularMovie
// 키워드 입력 => keyword


const MoviePage = () => {

  const [query, setQuery] = useSearchParams()
  const [page, setPage] = useState(1)
  const [sortOrder, setSortOrder] = useState('');
  const [sortOrderLabel, setSortOrderLabel] = useState('정렬기준');
  const [selectedGenre, setSelectedGenre] = useState(null);
  const keyword = query.get('q')
  const {data, isLoading, isError, error} = useSearchMovieQuery({keyword,page});
  const { data: genreData } = useMovieGenreQuery();

  const handlePageClick = ({selected}) => {
    setPage(selected + 1)
  } 

  const sortedMovies = useMemo(() => {
    if (!data?.results) return [];
    
    let movies = [...data.results]; // 원본 배열을 변경하지 않기 위해 복사

    // 장르 필터링
    if (selectedGenre) {
      movies = movies.filter(movie => movie.genre_ids.includes(selectedGenre));
    }
    
    // 정렬
    if (sortOrder === 'popularity.desc') {
      return movies.sort((a, b) => b.popularity - a.popularity);
    }
    if (sortOrder === 'popularity.asc') {
      return movies.sort((a, b) => a.popularity - b.popularity);
    }
    
    return movies;
  }, [data, sortOrder, selectedGenre]);

  const selectedGenreName = useMemo(() => {
    if (!selectedGenre || !genreData) {
        return '장르별 검색';
    }
    const genre = genreData.find(g => g.id === selectedGenre);
    return genre ? genre.name : '장르별 검색';
  }, [selectedGenre, genreData]);


  if(isLoading) {
    return <div>로딩중...</div>

  }
 if(isError) {
    return <div>{error.message}</div>
 }

  return (
    <div className='contents'> 
        <div className='sort'>
          <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              {sortOrderLabel}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => { setSortOrder('popularity.desc'); setSortOrderLabel('인기 많은 순'); }}>인기 많은 순</Dropdown.Item>
              <Dropdown.Item onClick={() => { setSortOrder('popularity.asc'); setSortOrderLabel('인기 적은 순'); }}>인기 적은 순</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              {selectedGenreName}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSelectedGenre(null)}>전체</Dropdown.Item>
              {genreData?.map((genre) => (
                <Dropdown.Item 
                  key={genre.id} 
                  onClick={() => setSelectedGenre(genre.id)}
                >{genre.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <ul className='movie-lists'>
          {sortedMovies.map((movie,index) => (
            <li key={index}>
              <MovieCard key={index} movie={movie} />                
            </li>
          ))}
        </ul>     
        <div className='paging'>
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages} //전체페이지
            previousLabel="< "
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
        </div> 
    </div>   
  )
}

export default MoviePage