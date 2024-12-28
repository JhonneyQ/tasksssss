import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"



const HeaderA = () => {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <NavLink to="/admin">
                        admin
                    </NavLink>
                </li>
                <li>
                    <NavLink to="dashboard">
                        dashboard
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderA