import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../layouts/header'

const Client = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default Client