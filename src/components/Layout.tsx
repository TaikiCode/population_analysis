import { VFC } from 'react'
import Header from './Header'
import Wrapper from './Wrapper'

interface Props {
  children: React.ReactNode
}

const Layout: VFC<Props> = ({ children }) => (
  <Wrapper className="container">
    <Header title="都道府県別の総人口推移" />
    <Wrapper className="body">{children}</Wrapper>
  </Wrapper>
)

export default Layout
