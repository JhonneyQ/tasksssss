import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderA from '../../layouts/admin/header'

const Adminn = () => {
  return (
    <div>
        <HeaderA/>
        <Outlet/>
    </div>
  )
}

export default Adminn