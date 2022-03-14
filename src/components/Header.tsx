import { VFC } from 'react'
import Wrapper from './Wrapper'

interface Props {
  title: string
}

const Header: VFC<Props> = ({ title }) => (
  <Wrapper className="header">
    <h2>{title}</h2>
  </Wrapper>
)

export default Header
