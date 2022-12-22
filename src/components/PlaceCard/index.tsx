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
import { IPlace } from '../../types/placeType'
import StarRate from '../StarRate'

type IPlaceCard = {
  onClick: () => void
} & IPlace

const PlaceCard: React.FC<IPlaceCard> = ({
  name,
  location,
  price,
  rate,
  backgroundImageUrl,
  onClick,
}) => {
  return (
    <Container backgroundImageUrl={backgroundImageUrl} onClick={onClick}>
      <InfoWrapper>
        <CardName>{name}</CardName>
        <CardLocation>{location}</CardLocation>
        <CardPrice>
          <span>${price}</span> /night
        </CardPrice>
      </InfoWrapper>

      <StarIconWrapper>
        <StarRate rate={rate} />
      </StarIconWrapper>
    </Container>
  )
}

export default PlaceCard
