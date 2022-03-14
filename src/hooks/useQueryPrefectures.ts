import { useQuery } from 'react-query'
import { Prefecture } from '../types/types'
import { client } from '../utils/axios'

interface Response {
  message: null
  result: Prefecture[]
}

// BASE_URLの続きにくるpath
const URL_PATH = '/prefectures'

export const useQueryPrefectures = () => {
  const getData = async () => {
    const { data } = await client.get<Response>(URL_PATH)
    return data.result
  }

  return useQuery<Prefecture[], Error>({
    queryKey: 'prefectures',
    queryFn: getData,
    staleTime: Infinity,
  })
}
