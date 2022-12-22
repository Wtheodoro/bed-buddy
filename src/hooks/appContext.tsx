import React, { createContext, useState, useContext } from 'react'
import MOCK_PLACES from '../constants/places'
import { IBooking } from '../types/bookingType'
import { IPlace } from '../types/placeType'

interface IAppContext {
  places: IPlace[]
  bookings: IBooking[]
  addBooking: (newBooking: IBooking) => void
  editBooking: (newBooking: IBooking) => void
  removeBooking: (newBooking: IBooking) => void
}

interface IAppProvider {
  children: React.ReactNode
}

const AppContext = createContext<IAppContext>({} as IAppContext)

const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [places] = useState<IPlace[]>(MOCK_PLACES)
  const [bookings, setBooking] = useState<IBooking[]>(() => {
    const bookingsString = localStorage.getItem('@bedBuddy:bookings')

    if (bookingsString) return JSON.parse(bookingsString)

    return []
  })

  const addBooking = (newBooking: IBooking) => {
    const updatedBookings = [...bookings, newBooking]

    setBookingsInStateAndLocalstorage(updatedBookings)
  }

  const editBooking = (editedBooking: IBooking) => {
    const updatedBookings = bookings
    const editedBookIndex = bookings.findIndex(
      (booking) => booking.id === editedBooking.id
    )
    updatedBookings[editedBookIndex] = editedBooking

    setBookingsInStateAndLocalstorage(updatedBookings)
  }

  const removeBooking = (currentBooking: IBooking) => {
    const updatedBookings = bookings.filter(
      (booking) => booking.id !== currentBooking.id
    )

    setBookingsInStateAndLocalstorage(updatedBookings)
  }

  const setBookingsInStateAndLocalstorage = (updatedBookings: IBooking[]) => {
    setBooking(updatedBookings)
    localStorage.setItem('@bedBuddy:bookings', JSON.stringify(updatedBookings))
  }

  return (
    <AppContext.Provider
      value={{ places, bookings, addBooking, editBooking, removeBooking }}
    >
      {children}
    </AppContext.Provider>
  )
}

function useApp(): IAppContext {
  const context = useContext(AppContext)
  return context
}

export { AppProvider, useApp }
