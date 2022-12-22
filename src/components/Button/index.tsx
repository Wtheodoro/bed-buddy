import React from 'react'
import { Container } from './styles'

interface IButton {
  children: string
  onClick: () => void
  size?: 'small' | 'big'
  color?: 'green' | 'red'
}

const Button: React.FC<IButton> = ({
  children,
  onClick,
  size = 'big',
  color = 'green',
}) => {
  return (
    <Container onClick={onClick} size={size} color={color}>
      {children}
    </Container>
  )
}

export default Button
