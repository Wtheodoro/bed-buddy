import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BookingCard } from '../../components'
import PagehigherOrderComponent from '../../components/PagehigherOrderComponent'
import { useApp } from '../../hooks/appContext'
import { IBooking } from '../../types/bookingType'
import { Container } from './styled'

const MyBookinPage = () => {
  const navigate = useNavigate()
  const { bookings, removeBooking } = useApp()

  const handleCancelClick = (booking: IBooking) => {
    removeBooking(booking)
  }

  const handleViewClick = (id: number, name: string) =>
    navigate(`/rooms/${id}/${name}`)

  return (
    <Container>
      {bookings.map((booking) => (
        <BookingCard
          key={booking.id}
          {...booking}
          name={booking.placeName}
          onCancel={() => handleCancelClick(booking)}
          onEdit={() => {}}
          onView={() => handleViewClick(booking.placeId, booking.placeName)}
        />
      ))}

      {!bookings.length && (
        <p>Oops! It looks like you don't have any booking</p>
      )}
    </Container>
  )
}

export default PagehigherOrderComponent(MyBookinPage)
