import { useQuery } from 'react-query'
import axios from 'axios'
import { Population, TotalPopulation, Chart, Prefecture } from '../types/types'

const URL = 'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode='
const API_KEY = process.env.REACT_APP_RESAS_API_KEY || ''

interface Response {
  message: null
  result: Population
}

// 取得したデータから「総人口」だけ取得
const getOnlyTotalPopulation = (result: Population): TotalPopulation[] => {
  const { data } = result
  const totalPopulation = data.filter((item) => item.label === '総人口')[0]
  return totalPopulation.data
}

// chartに表示させるため、データ構造を変更
const changeFormatForChart = (totalPopulation: TotalPopulation[], prefName: string): Chart[] => totalPopulation.map((data: TotalPopulation) => ({
    name: data.year,
    [prefName]: data.value,
  }))

export const useQueryPopulation = ({ prefCode, prefName }: Prefecture) => {
  const getData = async () => {
    const { data } = await axios.get<Response>(`${URL}${prefCode}`, {
      headers: { 'X-API-KEY': API_KEY },
    })
    const totalPopulation = getOnlyTotalPopulation(data.result)
    return changeFormatForChart(totalPopulation, prefName)
  }

  return useQuery<Chart[], Error>({
    queryKey: 'population',
    queryFn: getData,
    staleTime: Infinity,
  })
}
