import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import "./PopularMovieSlide.scss"
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';



const PopularMovieSlide = () => {

    const {data, isLoading, isError, error} = usePopularMoviesQuery();
    //console.log("ddd",data);
    if(isLoading) {
        <h1>Loading ...</h1>
    }

    if(isError) {
        <h1>{error.message}</h1> 
    }


  return (
    <MovieSlider 
        title="Popular Movies" 
        movies={data?.results} 
        responsive={responsive} 
    />
    
  )
}

export default PopularMovieSlide