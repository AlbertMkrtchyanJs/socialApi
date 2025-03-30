import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'
import HomePage from '../../pages/HomePage/HomePage'

const Layout = () => {
  return (
    <div>
         <Nav /> 
          <HomePage />
        <Outlet />
    </div>
  )
}

export default Layout