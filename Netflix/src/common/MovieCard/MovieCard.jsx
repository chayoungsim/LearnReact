import React from 'react'
import Badge from 'react-bootstrap/Badge';
import "./MovieCard.scss"
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({movie}) => {

  const {data:genreData} = useMovieGenreQuery()
  const navigate = useNavigate()

  const showGenre = (genreIdList) => {
    if(!genreData) return []
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id)
      return genreObj?.name
    })
    return genreNameList
  }

  return (
    <div style={{backgroundImage:`url(https://www.themoviedb.org/t/p/w220_and_h330_face/${movie?.poster_path})`}} className='movie-card' onClick={() => navigate(`/movies/${movie.id}`)}>
        <div className='overlay'>
            <div className='inner'>
              <h1>{movie?.title}</h1>
              <p className='genre'>{showGenre(movie.genre_ids).map((id) => <Badge bg="danger" key={id}>{id}</Badge>)}</p>
              <div className='info'>
                  <div>평점 : {movie.vote_average}</div>
                  <div>인기도 : {movie.popularity}</div>
                  <div>관람가 : {movie.adult ? "over18" : "under18"}</div>
                  <div>개봉일 : {movie.release_date}</div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard