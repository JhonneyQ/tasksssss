import { Outlet } from 'react-router-dom'
import Header from '../../layout/client'


const Client = () => {
  return (
    <div>

        <Header/>
        <Outlet/>
    </div>
  )
}

export default Client