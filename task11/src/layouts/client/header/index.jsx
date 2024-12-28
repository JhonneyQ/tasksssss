import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"



const Header = () => {
  return (
    <header>
        <h2>React App (Client Side)</h2>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">
                        contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products">
                        products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/favorite">
                        favorites
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header