import { VFC } from 'react'
import { useQueryPrefectures } from '../hooks/useQueryPrefectures'
import { Prefecture } from '../types/types'
import PrefectureItem from './PrefectureItem'
import Wrapper from './Wrapper'

interface Props {
  handleSelectPref: (pref: Prefecture) => void
}

const PrefectureList: VFC<Props> = ({ handleSelectPref }) => {
  const { data, isLoading, isError } = useQueryPrefectures()
  if (isLoading) return <Wrapper className="prefectureListArea">Loading...</Wrapper>
  if (isError) return <Wrapper className="prefectureListArea">Error</Wrapper>

  return (
    <Wrapper className="prefectureListArea">
      <h4>都道府県</h4>
      <Wrapper className="prefectureList">
        {data &&
          data.map((pref: Prefecture) => (
            <PrefectureItem key={pref.prefCode} pref={pref} handleSelectPref={handleSelectPref} />
          ))}
      </Wrapper>
    </Wrapper>
  )
}

export default PrefectureList
