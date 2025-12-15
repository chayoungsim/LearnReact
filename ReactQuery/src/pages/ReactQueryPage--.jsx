import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const ReactQueryPage = () => {
    const fetchPost = (queryData) => {
        console.log("qqq",queryData)

        const id = queryData.queryKey[1]
        console.log(id)

        return axios.get(`http://localhost:4000/posts/${id}`)
    }

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['posts',1],
        queryFn: fetchPost,
        retry:1,
        //staleTime: 60000, // 1분간 api호출 금지 자주호출할 필요가 없는 상황에서 사용 api호출을 언제할지..
        //gcTime: 10000, // 10초만 캐시가 유지   stale < gcTime
        select: (data) => {
            return data.data
        },
        //refetchInterval:3000, // 3초마다 api호출한다
        //refetchOnMount: false // 처음만 호출되고 2번째 부터는 호출이 안된다 기본값은 true
        //refetchOnWindowFocus : true //포커스가 되면 호출 유저에게 매번 새로운 데이트를 계속 빨리빨리 보여주고 싶을떄
        //enabled:false, //로드시 data안보임 기본값은 true
    })

    if(isLoading) return <h1>로딩중 ...</h1>
    if(isError) return <h1>{error.message}가 발생했습니다.</h1>

    console.log(data, isLoading, isError, error)

  return (
    <div>        
        <div>{data?.map((item) =><div key={item.id}>{item.title}</div>)}</div>
        <button onClick={refetch}>POST 리스트 다시 들고오기</button>
    </div>
  )
}

export default ReactQueryPage