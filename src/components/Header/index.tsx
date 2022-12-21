import React from 'react'
import { Container, WelcomeMessageWrapper } from './styles'

interface IHeader {
  userName: string
}

const Header: React.FC<IHeader> = ({ userName }) => {
  return (
    <Container>
      <WelcomeMessageWrapper>Hello, {userName}</WelcomeMessageWrapper>
    </Container>
  )
}

export default Header
