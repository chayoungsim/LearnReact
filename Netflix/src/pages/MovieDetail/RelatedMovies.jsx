import React from 'react'
import MovieSlider from '../../common/MovieSlider/MovieSlider'
import { responsive } from '../../constants/responsive'



const RelatedMovies = ({related}) => {

  console.log("related",related)

  return (
    <div className='related'>        
        <MovieSlider 
          title="Related Moview"
          movies={related} 
          responsive={responsive} 
        />
    </div>
  )
}

export default RelatedMovies