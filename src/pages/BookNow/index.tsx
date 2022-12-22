import React, { useState } from 'react'
import { DateRangePicker, RangeKeyDict } from 'react-date-range'
import { useParams } from 'react-router-dom'
import { AddGuest, Button } from '../../components'
import PagehigherOrderComponent from '../../components/PagehigherOrderComponent'
import daysCounter from '../../helper/daysCounter'
import { useApp } from '../../hooks/appContext'
import { Container, GuestWrapper } from './styles'
import uuid from 'react-uuid'

const BookNowPage = () => {
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [numberOfGuests, setNumberOfGuests] = useState(2)

  const params = useParams()
  const { places } = useApp()

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

  const handleClick = () => {
    const newBooking = {
      id: uuid(),
      placeId: currentPlace.id,
      placeName: currentPlace.name,
      startDate,
      endDate,
    }

    console.log(newBooking)
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
