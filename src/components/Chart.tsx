import { useRef, VFC } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useQueryPopulation } from '../hooks/useQueryPopulations'
import { Prefecture } from '../types/types'
import Wrapper from './Wrapper'
import { CHART_SIZE, DEFAULT_OPTIONS } from '../config/chartConfig'
import { STATUS_MESSAGE } from '../config/statusMessage'

interface Props {
  selectedPref: Prefecture[]
}

const Chart: VFC<Props> = ({ selectedPref }) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null)
  const { data, isLoading, isError } = useQueryPopulation(selectedPref)

  if (!selectedPref.length) return <Wrapper className="chartArea">{STATUS_MESSAGE.isEmpty}</Wrapper>
  if (isLoading) return <Wrapper className="chartArea">{STATUS_MESSAGE.isLoading}</Wrapper>
  if (isError) return <Wrapper className="chartArea">{STATUS_MESSAGE.isError}</Wrapper>

  const options: Highcharts.Options = {
    ...DEFAULT_OPTIONS,
    xAxis: {
      ...DEFAULT_OPTIONS.xAxis,
      categories: data[0]?.categories, // X軸ラベルの値
    },
    series: data.map((item) => ({
      type: 'line',
      ...item?.series,
    })),
  }

  return (
    <Wrapper className="chartArea">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
        containerProps={{ style: CHART_SIZE }}
      />
    </Wrapper>
  )
}

export default Chart
