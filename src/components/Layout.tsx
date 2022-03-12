import { VFC } from 'react'
import Header from './Header'

interface Props {
  children: React.ReactNode
}

const Layout: VFC<Props> = ({ children }) => (
  <div className="container">
    <Header title="都道府県別の総人口推移" />
    <div className="body">{children}</div>
  </div>
)

export default Layout
