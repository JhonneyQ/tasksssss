import { Outlet } from 'react-router-dom'
import Headerr from '../../layouts/User/Header'

const ClientLayout = () => {
  return (
    <div>

        <Headerr/>
        <Outlet/>
    </div>
  )
}

export default ClientLayout