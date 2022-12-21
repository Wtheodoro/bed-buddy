import React from 'react'
import { Container, ItemWrapper } from './styles'
import { FaBed, FaBath, FaRulerCombined, FaTree } from 'react-icons/fa'

const RoomDetails = () => {
  return (
    <Container>
      <p>Details</p>

      <div>
        <ItemWrapper>
          <FaTree />
          <p>Green</p>
        </ItemWrapper>

        <ItemWrapper>
          <FaBed />
          <p>Bedrooms</p>
        </ItemWrapper>

        <ItemWrapper>
          <FaBath />
          <p>Bathrooms</p>
        </ItemWrapper>

        <ItemWrapper>
          <FaRulerCombined />
          <p>3000 sqft</p>
        </ItemWrapper>
      </div>
    </Container>
  )
}

export default RoomDetails
