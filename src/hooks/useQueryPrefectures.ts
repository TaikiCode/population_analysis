import { useQuery } from 'react-query'
import axios from 'axios'
import { Prefecture } from '../types/types'

const URL = 'https://opendata.resas-portal.go.jp/api/v1/prefectures'
const API_KEY = process.env.REACT_APP_RESAS_API_KEY || ''

interface Response {
  message: null
  result: Prefecture[]
}

export const useQueryPrefectures = () => {
  const getData = async () => {
    const { data } = await axios.get<Response>(URL, {
      headers: { 'X-API-KEY': API_KEY },
    })
    return data.result
  }

  return useQuery<Prefecture[], Error>({
    queryKey: 'prefectures',
    queryFn: getData,
    staleTime: Infinity,
  })
}
