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

  if (!selectedPref.length) return <div className="chartArea">都道府県を選択してください。</div>
  if (isLoading) return <div className="chartArea">Loading...</div>
  if (isError) return <div>Error</div>

  const options: Highcharts.Options = {
    title: {
      text: '',
      style: {
        display: 'none',
      },
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
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },
    series: data.map((item) => ({
      type: 'line',
      ...item?.series,
    })),
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  }

  return (
    <div className="chartArea">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
        containerProps={{ style: { width: '100%', height: '100%' } }}
      />
    </div>
  )
}

export default Chart
