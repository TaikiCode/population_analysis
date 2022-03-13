import { VFC } from 'react'
import { useQueryPrefectures } from '../hooks/useQueryPrefectures'
import { Prefecture } from '../types/types'

const PrefectureItem: VFC<Prefecture> = ({ prefCode, prefName }) => (
  <label htmlFor={prefName}>
    <input id={prefName} type="checkbox" />
    {prefName}
  </label>
)

const PrefectureList: VFC = () => {
  const { status, data } = useQueryPrefectures()
  if (status === 'loading') return <div>Loading...</div>
  if (status === 'error') return <div>Error</div>

  return (
    <div className="prefectureListArea">
      <h4>都道府県</h4>
      <div className="prefectureList">
        {data &&
          data.map(({ prefCode, prefName }) => (
            <PrefectureItem key={prefCode} prefCode={prefCode} prefName={prefName} />
          ))}
      </div>
    </div>
  )
}

export default PrefectureList
