import React from 'react'
import { useMovieDetailQuery } from '../../hooks/useMovieDetail'
import { useNavigate } from 'react-router-dom'

const MovieDetailPage = () => {

  const {data, isLoading, isError, error} = useMovieDetailQuery()
  const navigate = useNavigate(`/1`)



  console.log(data)

  return (
    <div>MovieDetailPage</div>
  )
}

export default MovieDetailPage