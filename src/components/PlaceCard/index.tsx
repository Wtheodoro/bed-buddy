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
  name: string
  location: string
  price: number
  rate: number
  backgroundImageUrl: string
}

const PlaceCard: React.FC<IPlaceCard> = ({
  name,
  location,
  price,
  rate,
  backgroundImageUrl,
}) => {
  return (
    <Container backgroundImageUrl={backgroundImageUrl}>
      <InfoWrapper>
        <CardName>{name}</CardName>
        <CardLocation>{location}</CardLocation>
        <CardPrice>
          <span>${price}</span> /night
        </CardPrice>
      </InfoWrapper>

      <StarIconWrapper>
        <RiStarSFill /> <span>{rate}</span>
      </StarIconWrapper>
    </Container>
  )
}

export default PlaceCard
