import { VFC } from 'react'
import { Prefecture } from '../types/types'

interface Props {
  pref: Prefecture
}
const PrefectureItem: VFC<Props> = ({ pref: { prefCode, prefName } }) => {
  const handleOnClick = (code: number) => console.log(code)
  return (
    <label htmlFor={prefName}>
      <input id={prefName} type="checkbox" onChange={() => handleOnClick(prefCode)} />
      {prefName}
    </label>
  )
}

export default PrefectureItem
