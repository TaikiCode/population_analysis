import { Population } from '../types/types'

// 今回、採用した「HighChartJS」のデータ構造
interface Chart {
  categories: string[]
  series: {
    name: string
    data: number[]
  }
}

// 取得したデータの構造を、Chartライブラリに適応する構造に変更する関数
export const changeFormatForChart = (population: Population[], prefName: string): Chart => ({
  categories: population.map((data) => String(data.year)),
  series: {
    name: prefName,
    data: population.map((data) => data.value),
  },
})
