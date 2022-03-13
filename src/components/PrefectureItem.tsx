import { VFC } from 'react'
import { Prefecture } from '../types/types'

interface Props {
  pref: Prefecture
  handleSelectPrefecture: (pref: Prefecture) => void
}
const PrefectureItem: VFC<Props> = ({ pref, handleSelectPrefecture }) => {
  const { prefName } = pref
  return (
    <label htmlFor={prefName}>
      <input id={prefName} type="checkbox" onChange={() => handleSelectPrefecture(pref)} />
      {prefName}
    </label>
  )
}

export default PrefectureItem
