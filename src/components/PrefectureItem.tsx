import { VFC } from 'react'
import { Prefecture } from '../types/types'

interface Props {
  pref: Prefecture
  handleSelectPref: (pref: Prefecture) => void
}
const PrefectureItem: VFC<Props> = ({ pref, handleSelectPref }) => {
  const { prefName } = pref
  return (
    <label htmlFor={prefName}>
      <input id={prefName} type="checkbox" onChange={() => handleSelectPref(pref)} />
      {prefName}
    </label>
  )
}

export default PrefectureItem
