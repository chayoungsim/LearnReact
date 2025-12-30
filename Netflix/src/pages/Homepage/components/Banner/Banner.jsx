import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import './Banner.scss'
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'
import { useMovieVideoQuery } from '../../../../hooks/useMovieVideo'


const Banner = () => {


    const {data, isLoading, isError, error} = usePopularMoviesQuery();
    const movieId = data?.results?.[0]?.id;
    const [modalShow, setModalShow] = React.useState(false);
    const {data:video} = useMovieVideoQuery(movieId, {
        enabled: !!movieId, // movieId가 존재할 때만 이 쿼리를 실행합니다.
    });

    console.log("video" , video)

    console.log(video?.results?.[0]?.key)

    if(isLoading) {
        return <h1>Loading ...</h1>
    }

    if(isError) {
        return <h1>{error.message}</h1> 
    }

  return (
    <>
    <div className='banner' style={{backgroundImage:"url("+`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[0].poster_path}`+")"}} >
        <div className='text'>
            <h1>{data?.results[0].title}</h1>
            <p>{data?.results[0].overview}</p>
            <Button variant="light" onClick={() => setModalShow(true)}>재생</Button>
        </div>
    </div>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false) }
        videoId={video?.results?.[0]?.key}
      />
    </>  
  )
}

export default Banner