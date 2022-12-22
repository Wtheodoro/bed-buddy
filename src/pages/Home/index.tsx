import React, { useState } from 'react'
import PagehigherOrderComponent from '../../components/PagehigherOrderComponent'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { Container, PlaceCardsWrapper } from './styles'
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

  return (
    <Container>
      <PlaceCardsWrapper>
        {places.map((place) => (
          <PlaceCard
            key={place.id}
            {...place}
            onClick={() => handlePlaceClick(place)}
          />
        ))}
      </PlaceCardsWrapper>
    </Container>
  )
}

export default PagehigherOrderComponent(HomePage)
