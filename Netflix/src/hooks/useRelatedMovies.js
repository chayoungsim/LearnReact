import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';


const fetchRelatedMoview = (id) => {
    return api.get(`/movie/${id}/similar`)
}


export const useRelatedMoviesQuery = (id) => {
    return useQuery({
        queryKey:["movie-related",id],
        queryFn : () => fetchRelatedMoview(id),
        select:(result) => result.data.results,
        //staleTime:300000
    })
}
