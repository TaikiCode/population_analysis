import { VFC } from 'react'
import { Prefecture } from '../types/types'

interface Props {
  pref: Prefecture
  setSelectedPref: (pref: Prefecture) => void
}
const PrefectureItem: VFC<Props> = ({ pref, setSelectedPref }) => {
  const { prefName } = pref
  return (
    <label htmlFor={prefName}>
      <input id={prefName} type="checkbox" onChange={() => setSelectedPref(pref)} />
      {prefName}
    </label>
  )
}

export default PrefectureItem
