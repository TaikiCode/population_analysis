import { useRef, VFC } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useQueryPopulation } from '../hooks/useQueryPopulations'
import { Prefecture } from '../types/types'

interface Props {
  selectedPref: Prefecture[]
}

const Chart: VFC<Props> = ({ selectedPref }) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null)
  const { data, isLoading, isError } = useQueryPopulation(selectedPref)

  if (isLoading) return <div className="chartArea">Loading...</div>
  if (isError) return <div>Error</div>

  const options: Highcharts.Options = {
    title: {
      text: '総人口',
    },
    xAxis: {
      title: {
        text: '年度',
      },
      categories: data[0]?.categories,
    },
    yAxis: {
      title: {
        text: '人口数',
      },
    },
    // plotOptions: {
    //   line: {
    //     dataLabels: {
    //       enabled: true,
    //     },
    //     enableMouseTracking: false,
    //   },
    // },
    series: data.map((item) => ({
      type: 'line',
      ...item?.series,
    })),
  }

  return (
    <div className="chartArea">
      <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef} />
    </div>
  )
}

export default Chart
