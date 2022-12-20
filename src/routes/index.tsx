import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import HomePage from '../pages/Home/indext'
import Welcome from '../pages/Welcome'

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
