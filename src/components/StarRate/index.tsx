import React from 'react'
import { RiStarSFill } from 'react-icons/ri'
import { Container } from './styled'

interface IStarRate {
  rate: number
}

const StarRate: React.FC<IStarRate> = ({ rate }) => {
  return (
    <Container>
      <RiStarSFill /> <span>{rate}</span>
    </Container>
  )
}

export default StarRate
