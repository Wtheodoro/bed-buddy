import React from 'react'
import {
  CardLocation,
  CardName,
  CardPrice,
  Container,
  InfoWrapper,
  StarIconWrapper,
} from './styles'
import { RiStarSFill } from 'react-icons/ri'

interface IPlaceCard {
  backgroundImageUrl: string
}

const PlaceCard: React.FC<IPlaceCard> = ({ backgroundImageUrl }) => {
  return (
    <Container backgroundImageUrl={backgroundImageUrl}>
      <InfoWrapper>
        <CardName>Intercontinental Hotel</CardName>
        <CardLocation>Lagos, Nigeria</CardLocation>
        <CardPrice>
          <span>$205</span> /night
        </CardPrice>
      </InfoWrapper>

      <StarIconWrapper>
        <RiStarSFill /> <span>5.0</span>
      </StarIconWrapper>
    </Container>
  )
}

export default PlaceCard
