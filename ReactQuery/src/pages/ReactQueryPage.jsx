import React from 'react'

import { usePostQuery } from '../hooks/usePosts'

const ReactQueryPage = () => {
    
    const { data, isLoading, isError, error, refetch} = usePostQuery()
  
    console.log(data, isLoading, isError, error)


    if(isLoading) return <h1>로딩중 ...</h1>
    if(isError) return <h1>{error.message}가 발생했습니다.</h1>

    

  return (
    <div>        
        <div>{data?.map((item) =><div key={item.id}>{item.title}</div>)}</div>
        <button onClick={refetch}>POST 리스트 다시 들고오기</button>
    </div>
  )
}

export default ReactQueryPage