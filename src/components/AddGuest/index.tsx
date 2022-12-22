import React from 'react'
import { Container, GuestButton } from './styles'

interface IAddGuest {
  guestAmout: number
  onIncrease: () => void
  onDecrease: () => void
}

const AddGuest: React.FC<IAddGuest> = ({
  guestAmout,
  onDecrease,
  onIncrease,
}) => {
  return (
    <Container>
      <GuestButton onClick={onIncrease}>+</GuestButton>
      <span>{guestAmout}</span>
      <GuestButton onClick={onDecrease}>-</GuestButton>
    </Container>
  )
}

export default AddGuest
