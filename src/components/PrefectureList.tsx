import { VFC } from 'react'
import { useQueryPrefectures } from '../hooks/useQueryPrefectures'
import { Prefecture } from '../types/types'
import PrefectureItem from './PrefectureItem'
import Wrapper from './common/Wrapper'
import { STATUS_MESSAGE } from '../config/statusMessage'
import Status from './common/Status'

interface Props {
  handleSelectPref: (pref: Prefecture) => void
}

const PrefectureList: VFC<Props> = ({ handleSelectPref }) => {
  const { data, isLoading, isError } = useQueryPrefectures()

  if (isLoading) return <Status className="prefAreaStatus" message={STATUS_MESSAGE.isLoading} />
  if (isError) return <Status className="prefAreaStatus" message={STATUS_MESSAGE.isError} />

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
