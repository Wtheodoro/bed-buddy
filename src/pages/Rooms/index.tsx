import React from 'react'
import { useParams } from 'react-router-dom'
import PagehigherOrderComponent from '../../components/PagehigherOrderComponent'
import MOCK_PLACES from '../../constants/places'
import {
  Container,
  NameLocationWrapper,
  InfoWrapper,
  GalleryDetailsWrapper,
} from './styles'
import { MdLocationOn } from 'react-icons/md'
import { Gallery, RoomDetails } from '../../components'

const RoomsPage = () => {
  const params = useParams()

  const currentPlace = MOCK_PLACES.find(
    (place) => place.id === Number(params.id)
  )

  console.log(currentPlace)
  return (
    <Container>
      <img src={currentPlace?.backgroundImageUrl} alt={currentPlace?.name} />

      <NameLocationWrapper>
        <InfoWrapper>
          <h1>{currentPlace?.name}</h1>
          <p>
            <MdLocationOn />
            {currentPlace?.location}
          </p>
        </InfoWrapper>
      </NameLocationWrapper>

      <GalleryDetailsWrapper>
        <Gallery imageUrls={currentPlace?.previewImagesUrl} />
        <RoomDetails />
      </GalleryDetailsWrapper>
    </Container>
  )
}

export default PagehigherOrderComponent(RoomsPage)
