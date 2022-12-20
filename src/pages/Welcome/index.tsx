import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components'
import { Container, InformationWrapper } from './styles'

const WelcomePage = () => {
  const navigate = useNavigate()

  const handleClick = () => navigate('/home')

  return (
    <Container>
      <InformationWrapper>
        <h2>Welcome to</h2>

        <h1>
          Bed <br />
          Buddy
        </h1>

        <Button onClick={handleClick}>Ready!</Button>

        <p>The best hotel bookings in the century to accompany your vacation</p>
      </InformationWrapper>
    </Container>
  )
}

export default WelcomePage
