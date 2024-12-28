import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../layouts/client/header'

const Client = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Client