import React, { useEffect, useState } from 'react'
import { DateRangePicker, RangeKeyDict } from 'react-date-range'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom'
import { AddGuest, Button } from '../../components'
import PagehigherOrderComponent from '../../components/PagehigherOrderComponent'
import dateRangeList from '../../helper/dateRangeList'
import customDayContent from '../../helper/dateRangeMark'
import daysCounter from '../../helper/daysCounter'
import { useApp } from '../../hooks/appContext'
import { Container, GuestWrapper, NavWrapper } from './styles'

const BookEditPage = () => {
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [numberOfGuests, setNumberOfGuests] = useState(2)

  const params = useParams()
  const navigate = useNavigate()
  const { bookings, places, editBooking } = useApp()

  const currentBooking = bookings.find((booking) => booking.id === params.id)!
  const currentPlace = places.find(
    (place) => place.id === Number(currentBooking.placeId)
  )!

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }

  useEffect(() => {
    setStartDate(new Date(currentBooking.startDate))
    setEndDate(new Date(currentBooking.endDate))
    setNumberOfGuests(currentBooking.guests)
  }, [currentBooking.endDate, currentBooking.guests, currentBooking.startDate])

  const handleSelect = (ranges: RangeKeyDict) => {
    const { startDate, endDate } = ranges.selection

    if (!startDate || !endDate) return

    setStartDate(startDate)
    setEndDate(endDate)
  }

  const increaseGuest = () => {
    if (numberOfGuests > 9) return
    setNumberOfGuests(numberOfGuests + 1)
  }

  const decreaseGuest = () => {
    if (numberOfGuests < 2) return
    setNumberOfGuests(numberOfGuests - 1)
  }

  const days = daysCounter(startDate, endDate)

  const bookedDatesById = bookings.map(({ id, startDate, endDate }) => ({
    id,
    dateRangeList: dateRangeList(new Date(startDate), new Date(endDate)),
  }))

  const blockedDatesById = bookedDatesById.filter(
    (bookedkedDateById) => bookedkedDateById.id !== currentBooking.id
  )

  const blockedDatesList = blockedDatesById
    .map(({ dateRangeList }) => dateRangeList)
    .flat(1)

  const handleClick = () => {
    const newBooking = {
      ...currentBooking,
      guests: numberOfGuests,
      startDate,
      endDate,
    }

    editBooking(newBooking)
    navigate('/myBooking')
  }

  const handleBackToHome = () => navigate(-1)

  return (
    <Container>
      <NavWrapper onClick={handleBackToHome}>
        <BiArrowBack /> <span>Back</span>
      </NavWrapper>

      <h2>Edit Date</h2>

      <DateRangePicker
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={['#fd5861']}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        disabledDates={blockedDatesList}
        dayContentRenderer={(param) =>
          customDayContent(param, blockedDatesList)
        }
      />

      {!!bookings.length && <p>Days marked in Orange are already booked</p>}

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

export default PagehigherOrderComponent(BookEditPage)
