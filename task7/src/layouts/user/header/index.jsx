import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className='container'>
            <h2>Logo</h2>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts">
                            contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">
                            products
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header