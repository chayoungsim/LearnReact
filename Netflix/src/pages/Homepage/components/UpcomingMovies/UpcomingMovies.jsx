import React from 'react'
import { useUpcommingMoviesQuery } from '../../../../hooks/useUpcomingMovies'
import MovieSlider from '../../../../common/MovieSlider/MovieSlider'
import { responsive } from '../../../../constants/responsive'



const UpcomingMovies = () => {

    const {data, isLoading, isError, error} = useUpcommingMoviesQuery();
    //console.log("ddd",data);    
    if(isLoading) {
        <h1>Loading ...</h1>
    }   
    if(isError) {
        <h1>{error.message}</h1> 
    }
    

  return (
    <MovieSlider 
        title="Upcoming Movies" 
        movies={data?.results} 
        responsive={responsive} 
    />
  )
}

export default UpcomingMovies