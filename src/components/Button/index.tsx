import React from 'react'
import { Container } from './styles'

interface IButton {
  children: string
  onClick: () => void
}

const Button: React.FC<IButton> = ({ children, onClick }) => {
  return <Container onClick={onClick}>{children}</Container>
}

export default Button
