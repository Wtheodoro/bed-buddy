import React, { useState } from 'react'
import dateRangeFormat from '../../helper/dateRange'
import Button from '../Button'
import StarRate from '../StarRate'
import {
  Container,
  InfoWrapper,
  InitialButtonWrapper,
  HiddenButtonWrapper,
  ButtonsWrapper,
} from './styles'

interface IBookingCard {
  name: string
  location: string
  rate: number
  coverImageUrl: string
  startDate: Date
  endDate: Date
  onCancel: () => void
  onEdit: () => void
  onView: () => void
}

const BookingCard: React.FC<IBookingCard> = ({
  name,
  location,
  rate,
  coverImageUrl,
  startDate,
  endDate,
  onCancel,
  onEdit,
  onView,
}) => {
  const [showHiddenButtons, setShowHiddenButtons] = useState<boolean>(false)

  const toggleHiddenButtons = () => setShowHiddenButtons(!showHiddenButtons)

  const dateRange = dateRangeFormat(startDate, endDate)
  return (
    <Container>
      <div onClick={onView}>
        <img src={coverImageUrl} alt='cover' />

        <InfoWrapper>
          <h3>{name}</h3>
          <p>{location}</p>
          <p>{dateRange}</p>
        </InfoWrapper>
      </div>

      <ButtonsWrapper>
        <InitialButtonWrapper hide={!showHiddenButtons}>
          <Button onClick={toggleHiddenButtons} size='small' color='red'>
            Cancel
          </Button>
          <Button onClick={onEdit} size='small'>
            Edit
          </Button>
        </InitialButtonWrapper>

        <HiddenButtonWrapper hide={showHiddenButtons}>
          <Button onClick={toggleHiddenButtons} size='small'>
            Back
          </Button>
          <Button onClick={onCancel} size='small' color='red'>
            Confirm
          </Button>
        </HiddenButtonWrapper>
      </ButtonsWrapper>
    </Container>
  )
}

export default BookingCard
