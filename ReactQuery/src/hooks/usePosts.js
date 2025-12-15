import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchPost = () => {   
    //const id = queryData.queryKey[1]   
    return axios.get(`http://localhost:4000/posts/`)
}

export const usePostQuery = () => {
    return useQuery({
        queryKey: ['posts' ],
        queryFn: () => fetchPost(),
        select: (data) => {
            return data.data
        },
    })
}


