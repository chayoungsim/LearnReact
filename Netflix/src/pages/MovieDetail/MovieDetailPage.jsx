import React from 'react'
import { useMovieDetailQuery } from '../../hooks/useMovieDetail'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import './MovieDetailPage.scss'
import RelatedMovies from './RelatedMovies';
import Reviews from './Reviews';
import { useMovieReviewQuery } from '../../hooks/useReviews';
import { useRelatedMoviesQuery } from '../../hooks/useRelatedMovies'


const MovieDetailPage = () => {

  const { id } = useParams();
  const { data:movie, isLoading, isError, error } = useMovieDetailQuery(id)
  const { data:review } = useMovieReviewQuery(id)
  const { data:related } = useRelatedMoviesQuery(id)


  console.log(movie)
  console.log("review :", review)
 
  if(isLoading) {
    return <div>로딩중...</div>
  }
  if(isError) {
    return <div>{error.message}</div>
  }

  return (
    <Container>
      <Row className='movie-detail'>
        <Col xs={12} lg={6} className='photo'>
          <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt={movie.title} />
        </Col>
        <Col xs={12} lg={6} className='desc'>
          <Stack direction="horizontal" gap={2}>{movie.genres.map((genre) => <Badge bg="danger" key={genre.id}>{genre.name}</Badge>)}</Stack>
          <h3>{movie.title}</h3>
          <div className='info'>
            <p>{movie.vote_average}</p>
            <p>{movie.vote_count}</p>
            <p>{movie.popularity}</p>   
            <p className='adult'>{movie.adult ? `over18` : (<img src="https://noona-netflix-react-query.vercel.app/under18.svg" alt="under18" /> )}</p>
          
          </div>             
          <div className='overview'>{movie.overview}</div>
          <div className='elt'>
            <p><Badge bg="danger">Budget</Badge> {movie.budget}</p>
            <p><Badge bg="danger">Revenue</Badge> {movie.revenue}</p>
            <p><Badge bg="danger">release_date</Badge> {movie.release_date}</p>
            <p><Badge bg="danger">Runtime</Badge> {movie.runtime}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <RelatedMovies related={related}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Reviews review={review} />
        </Col>
      </Row>
    </Container>
   
  )
}

export default MovieDetailPage