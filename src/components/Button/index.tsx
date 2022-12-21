import React from 'react'
import { Container } from './styles'

interface IButton {
  children: string
  onClick: () => void
  size?: 'small' | 'big'
}

const Button: React.FC<IButton> = ({ children, onClick, size = 'big' }) => {
  return (
    <Container onClick={onClick} size={size}>
      {children}
    </Container>
  )
}

export default Button
