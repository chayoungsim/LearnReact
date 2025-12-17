import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../../common/MovieCard/MovieCard';
import './MoiveSlider.scss'

const MovieSlider = ({title, movies=[], responsive}) => {
  if (!Array.isArray(movies) || movies.length === 0) {
    return null; // 또는 로딩 UI
  }
  return (
    <div>
        <h3>{title}</h3>        
        <Carousel
            infinite={movies.length > 1}
            centerMode={movies.length > 1}
            showDots={true}
            dotListClass="custom-dot-list-style"
            itemClass="movie-slider"
            containerClass="carousel-container"
            responsive={responsive}            
        >
            {
              movies.map((movie,index) => (
                <MovieCard key={index} movie={movie} />
            ))}
        </Carousel>
    </div>
  )
}

export default MovieSlider