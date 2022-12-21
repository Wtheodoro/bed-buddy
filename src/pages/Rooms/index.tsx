import React from 'react'
import { useParams } from 'react-router-dom'
import PagehigherOrderComponent from '../../components/PagehigherOrderComponent'
import MOCK_PLACES from '../../constants/places'
import {
  Container,
  NameLocationWrapper,
  InfoWrapper,
  GalleryDetailsWrapper,
  RoomPageFooter,
  CoverImage,
  DesktopImageGridWrapper,
  MedediaMatch,
  DesktopBookingContainner,
} from './styles'
import { MdLocationOn } from 'react-icons/md'
import {
  Button,
  DesktopImagesGrid,
  Gallery,
  RoomDetails,
} from '../../components'

const RoomsPage = () => {
  const params = useParams()

  const currentPlace = MOCK_PLACES.find(
    (place) => place.id === Number(params.id)
  )

  console.log(currentPlace)
  return (
    <Container>
      <CoverImage src={currentPlace?.backgroundImageUrl!} />

      <NameLocationWrapper>
        <InfoWrapper>
          <h1>{currentPlace?.name}</h1>
          <p>
            <MdLocationOn />
            {currentPlace?.location}
          </p>
        </InfoWrapper>
      </NameLocationWrapper>

      <DesktopImageGridWrapper>
        <DesktopImagesGrid
          mainImageUrl={currentPlace?.backgroundImageUrl!}
          previewImageUrls={currentPlace?.previewImagesUrl!}
        />
      </DesktopImageGridWrapper>

      <GalleryDetailsWrapper>
        <MedediaMatch>
          <Gallery imageUrls={currentPlace?.previewImagesUrl} />
          <RoomDetails />
        </MedediaMatch>

        <DesktopBookingContainner>
          <p>
            <span>${currentPlace?.price}</span> /night
          </p>
          <Button onClick={() => {}} size='small'>
            Book Now!
          </Button>
        </DesktopBookingContainner>
      </GalleryDetailsWrapper>

      <RoomPageFooter>
        <p>
          <span>${currentPlace?.price}</span> /night
        </p>
        <Button onClick={() => {}} size='small'>
          Book Now!
        </Button>
      </RoomPageFooter>
    </Container>
  )
}

export default PagehigherOrderComponent(RoomsPage)
