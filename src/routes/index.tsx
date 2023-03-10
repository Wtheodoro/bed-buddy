import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import BookNowPage from '../pages/BookNow'
import BookEditPage from '../pages/BookEdit'
import HomePage from '../pages/Home'
import MyBookinPage from '../pages/MyBooking'
import RoomsPage from '../pages/Rooms'
import Welcome from '../pages/Welcome'

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/myBooking' element={<MyBookinPage />} />
        <Route path='/rooms/:id/:name' element={<RoomsPage />} />
        <Route path='/bookNow/:id/:name' element={<BookNowPage />} />
        <Route path='bookEdit/:id' element={<BookEditPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
