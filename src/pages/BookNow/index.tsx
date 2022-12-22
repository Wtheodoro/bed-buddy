import React, { useState } from 'react'
import { DateRangePicker, RangeKeyDict } from 'react-date-range'
import { useNavigate, useParams } from 'react-router-dom'
import { AddGuest, Button } from '../../components'
import PagehigherOrderComponent from '../../components/PagehigherOrderComponent'
import daysCounter from '../../helper/daysCounter'
import { useApp } from '../../hooks/appContext'
import { Container, GuestWrapper } from './styles'
import uuid from 'react-uuid'
import dateRangeList from '../../helper/dateRangeList'

const BookNowPage = () => {
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [numberOfGuests, setNumberOfGuests] = useState(2)

  const params = useParams()
  const navigate = useNavigate()
  const { places, addBooking, bookings } = useApp()

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }

  const handleSelect = (ranges: RangeKeyDict) => {
    const { startDate, endDate } = ranges.selection

    if (!startDate || !endDate) return

    setStartDate(startDate)
    setEndDate(endDate)
  }

  const currentPlace = places.find((place) => place.id === Number(params.id))!

  const increaseGuest = () => {
    if (numberOfGuests > 9) return
    setNumberOfGuests(numberOfGuests + 1)
  }

  const decreaseGuest = () => {
    if (numberOfGuests < 2) return
    setNumberOfGuests(numberOfGuests - 1)
  }

  const days = daysCounter(startDate, endDate)
  const bookedDates = bookings
    .map(({ startDate, endDate }) =>
      dateRangeList(new Date(startDate), new Date(endDate))
    )
    .flat(1)

  const handleClick = () => {
    const newBooking = {
      id: uuid(),
      placeId: currentPlace.id,
      placeName: currentPlace.name,
      guests: numberOfGuests,
      location: currentPlace.location,
      startDate,
      endDate,
      coverImageUrl: currentPlace.backgroundImageUrl,
      rate: currentPlace.rate,
    }

    addBooking(newBooking)
    navigate('/myBooking')
  }

  return (
    <Container>
      <h2>Select Date</h2>

      <DateRangePicker
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={['#fd5861']}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        disabledDates={bookedDates}
      />

      <GuestWrapper>
        <h2>Guests</h2>
        <AddGuest
          guestAmout={numberOfGuests}
          onDecrease={decreaseGuest}
          onIncrease={increaseGuest}
        />
      </GuestWrapper>

      <p>Total: ${currentPlace.price * days}</p>

      <Button onClick={handleClick}>Ready!</Button>
    </Container>
  )
}

export default PagehigherOrderComponent(BookNowPage)
