import React from 'react'
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovies'
import MovieSlider from '../../../../common/MovieSlider/MovieSlider'
import { responsive } from '../../../../constants/responsive'

const TopRatedMovieSlide = () => {

    const {data, isLoading, isError, error} = useTopRatedMoviesQuery();
    //console.log("ddd",data);
    if(isLoading) {
        <h1>Loading ...</h1>
    }

    if(isError) {
        <h1>{error.message}</h1> 
    }


  return (
   <MovieSlider 
        title="Top Rated Movies" 
        movies={data?.results} 
        responsive={responsive} 
    />
  )
}

export default TopRatedMovieSlide