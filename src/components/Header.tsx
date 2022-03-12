import { VFC } from 'react'

interface Props {
  title: string
}

const Header: VFC<Props> = ({ title }) => (
  <div className="header">
    <h2>{title}</h2>
  </div>
)

export default Header
