import { useState } from 'react'
import { Prefecture } from '../types/types'

// 選択中の都道府県を管理する。
export const useSelectedPrefs = () => {
  const [selectedPref, setSelectedPref] = useState<Prefecture[]>([])

  const handleSelectPref = (pref: Prefecture) => {
    const exists: boolean = selectedPref.includes(pref)
    setSelectedPref((prevList) => (exists ? prevList.filter((prev) => pref !== prev) : [...prevList, pref]))
  }

  return { selectedPref, handleSelectPref }
}
