import React, { useState } from 'react'
import PagehigherOrderComponent from '../../components/PagehigherOrderComponent'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {
  Container,
  PlaceCardsWrapper,
  Cover,
  InformationWrapper,
} from './styles'
import { PlaceCard } from '../../components'
import { useNavigate } from 'react-router-dom'
import { IPlace } from '../../types/placeType'
import { useApp } from '../../hooks/appContext'

const HomePage = () => {
  const navigate = useNavigate()
  const { places } = useApp()

  const handlePlaceClick = (choosenPlace: IPlace) => {
    navigate(`/rooms/${choosenPlace.id}/${choosenPlace.name}`)
  }

  const handleSeeBookingClick = () => navigate('/myBooking')

  return (
    <Container>
      <Cover>
        <InformationWrapper>
          <h2>Where are we going today?</h2>
        </InformationWrapper>
      </Cover>

      <PlaceCardsWrapper>
        {places.map((place) => (
          <PlaceCard
            key={place.id}
            {...place}
            onClick={() => handlePlaceClick(place)}
          />
        ))}
      </PlaceCardsWrapper>

      <p onClick={handleSeeBookingClick}>Se all Bookings</p>
    </Container>
  )
}

export default PagehigherOrderComponent(HomePage)
