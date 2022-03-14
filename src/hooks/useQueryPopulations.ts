import { useQueries } from 'react-query'
import { Population, Prefecture } from '../types/types'
import { client } from '../utils/axios'
import { changeFormatForChart } from '../utils/changeFormatForChart'

interface Result {
  boundaryYear: number
  data: {
    label: string
    data: Population[]
  }[]
}
interface Response {
  message: null
  result: Result
}

// BASE_URLの続きにくるpath
const URL_PATH = '/population/composition/perYear?cityCode=-&prefCode='

// 取得対象になるラベル名
const targetLabel = '総人口'
// 取得したデータから指定したデータだけ取得する
const getOnlyTargetData = (result: Result): Population[] => {
  const { data } = result
  const totalPopulation = data.filter((item) => item.label === targetLabel)[0]
  return totalPopulation.data
}

export const useQueryPopulation = (prefList: Prefecture[]) => {
  const getData = async ({ prefCode, prefName }: Prefecture) => {
    // 1) APIからデータ取得
    const { data } = await client.get<Response>(`${URL_PATH}${prefCode}`)
    // 2) 取得したデータの中から「総人口」に該当するデータのみ抽出
    const totalPopulation = getOnlyTargetData(data.result)
    // 3) 表示させるChartのデータ構造に合わせて、構造を変更
    return changeFormatForChart(totalPopulation, prefName)
  }

  const results = useQueries(
    prefList.map((pref: Prefecture) => ({
      queryKey: ['population', pref.prefCode],
      queryFn: () => getData(pref),
      staleTime: Infinity,
    }))
  )

  // クライアント側では、「data」と「status」だけ受け取れるようにする
  return {
    data: results.map((result) => result.data),
    isLoading: results.some((result) => result.isLoading),
    isError: results.some((result) => result.isError),
  }
}
