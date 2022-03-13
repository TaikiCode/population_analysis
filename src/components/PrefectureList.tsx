import { VFC } from 'react'
import { useQueryPrefectures } from '../hooks/useQueryPrefectures'
import { Prefecture } from '../types/types'
import PrefectureItem from './PrefectureItem'

interface Props {
  setSelectedPref: (pref: Prefecture) => void
}

const PrefectureList: VFC<Props> = ({ setSelectedPref }) => {
  const { status, data } = useQueryPrefectures()
  if (status === 'loading') return <div>Loading...</div>
  if (status === 'error') return <div>Error</div>

  return (
    <div className="prefectureListArea">
      <h4>都道府県</h4>
      <div className="prefectureList">
        {data &&
          data.map((pref: Prefecture) => (
            <PrefectureItem key={pref.prefCode} pref={pref} setSelectedPref={setSelectedPref} />
          ))}
      </div>
    </div>
  )
}

export default PrefectureList
