import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { BookingCard } from '../../components'
import PagehigherOrderComponent from '../../components/PagehigherOrderComponent'
import { useApp } from '../../hooks/appContext'
import { IBooking } from '../../types/bookingType'
import { Container, NavWrapper } from './styled'

const MyBookinPage = () => {
  const navigate = useNavigate()
  const { bookings, removeBooking } = useApp()

  const handleCancelClick = (booking: IBooking) => {
    removeBooking(booking)
  }

  const handleEditClick = (bookId: string) => navigate(`/bookEdit/${bookId}`)

  const handleViewClick = (placeId: number, placeName: string) =>
    navigate(`/rooms/${placeId}/${placeName}`)

  const handleBackToHome = () => navigate('/home')

  return (
    <Container>
      <NavWrapper onClick={handleBackToHome}>
        <BiArrowBack /> <span>Back to Home</span>
      </NavWrapper>

      {bookings.map((booking) => (
        <BookingCard
          key={booking.id}
          {...booking}
          name={booking.placeName}
          onCancel={() => handleCancelClick(booking)}
          onEdit={() => handleEditClick(booking.id)}
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
