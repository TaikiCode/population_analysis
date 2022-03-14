import { VFC } from 'react'

// 各コンポーネントをラップするコンポーネント
// ・実際に使用するclassNameをここで定義する。

interface Props {
  className: 'container' | 'header' | 'body' | 'prefectureListArea' | 'prefectureList' | 'chartArea'
  children: React.ReactNode
}

const Wrapper: VFC<Props> = ({ className, children }) => <div className={className}>{children}</div>

export default Wrapper
