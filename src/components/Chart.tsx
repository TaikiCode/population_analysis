import { useRef, VFC } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useQueryPopulation } from '../hooks/useQueryPopulations'
import { Prefecture } from '../types/types'
import Wrapper from './common/Wrapper'
import { CHART_SIZE, DEFAULT_OPTIONS } from '../config/chartConfig'
import { STATUS_MESSAGE } from '../config/statusMessage'
import Status from './common/Status'

interface Props {
  selectedPref: Prefecture[]
}

const Chart: VFC<Props> = ({ selectedPref }) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null)
  const { data, isLoading, isError } = useQueryPopulation(selectedPref)

  if (!selectedPref.length) return <Status className="chartStatus" message={STATUS_MESSAGE.isEmpty} />
  if (isLoading) return <Status className="chartStatus" message={STATUS_MESSAGE.isLoading} />
  if (isError) return <Status className="chartStatus" message={STATUS_MESSAGE.isError} />

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
