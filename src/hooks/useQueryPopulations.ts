import { useQueries } from 'react-query'
import { Population, TotalPopulation, Chart, Prefecture } from '../types/types'
import { client } from '../utils/axios'

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
const changeFormatForHighChart = (totalPopulation: TotalPopulation[], prefName: string): Chart => {
  // 年数（X軸ラベル）を文字列型にして取得
  const years: string[] = totalPopulation.map((data) => String(data.year))
  const values: number[] = totalPopulation.map((data) => data.value)
  return {
    categories: years,
    series: {
      name: prefName,
      data: values,
    },
  }
}

// BASE_URLの続きにくるpath
const URL_PATH = '/population/composition/perYear?cityCode=-&prefCode='


export const useQueryPopulation = (prefList: Prefecture[]) => {
  const getData = async ({ prefCode, prefName }: Prefecture) => {
    const { data } = await client.get<Response>(`${URL_PATH}${prefCode}`)
    const totalPopulation = getOnlyTotalPopulation(data.result)
    return changeFormatForHighChart(totalPopulation, prefName)
  }

  const results = useQueries(
    prefList.map((pref: Prefecture) => ({
      queryKey: ['population', pref.prefCode],
      queryFn: () => getData(pref),
      //   staleTime: Infinity,
    }))
  )

  return {
    data: results.map((result) => result.data),
    isLoading: results.some((result) => result.isLoading),
    isError: results.some((result) => result.isError),
  }
}
