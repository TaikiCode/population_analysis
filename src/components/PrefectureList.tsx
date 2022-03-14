import { VFC } from 'react'
import { useQueryPrefectures } from '../hooks/useQueryPrefectures'
import { Prefecture } from '../types/types'
import PrefectureItem from './PrefectureItem'
import Wrapper from './Wrapper'
import { STATUS_MESSAGE } from '../config/statusMessage'

interface Props {
  handleSelectPref: (pref: Prefecture) => void
}

const PrefectureList: VFC<Props> = ({ handleSelectPref }) => {
  const { data, isLoading, isError } = useQueryPrefectures()
  if (isLoading) return <Wrapper className="prefectureListArea">{STATUS_MESSAGE.isLoading}</Wrapper>
  if (isError) return <Wrapper className="prefectureListArea">{STATUS_MESSAGE.isError}</Wrapper>

  return (
    <Wrapper className="prefectureListArea">
      <h4>都道府県一覧</h4>
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
