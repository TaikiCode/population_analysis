import { VFC } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts'
import { useQueryPopulation } from '../hooks/useQueryPopulations'
import { Prefecture } from '../types/types'

interface Props {
  selectedPref: Prefecture
}

const Chart: VFC<Props> = ({ selectedPref }) => {
  const { status, data } = useQueryPopulation(selectedPref)

  if (status === 'loading') return <div className="chartArea">Loading...</div>
  if (status === 'error') return <div>Error</div>

  return (
    <div className="chartArea">
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name">
            <Label value="年度" offset={-10} position="insideBottom" />
          </XAxis>
          <YAxis>
            <Label value="人口数" offset={-23} position="insideTopLeft" />
          </YAxis>
          <Tooltip />
          <Legend align="right" verticalAlign="top" height={36} />
          {[selectedPref].map((pref: Prefecture) => (
            <Line key={pref.prefCode} type="monotone" dataKey={pref.prefName} stroke="#8884d8" />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
