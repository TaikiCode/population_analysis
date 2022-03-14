import { VFC } from 'react'
import { StatusMessageType } from '../../config/statusMessage'

// 各ステータスを表示させるコンポーネント
// ・該当箇所（２つ）に適用するclassNameをここで定義する。

interface Props {
  className: 'prefAreaStatus' | 'chartStatus'
  message: StatusMessageType
}

const Status: VFC<Props> = ({ className, message }) => <div className={className}>{message}</div>

export default Status
