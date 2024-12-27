import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"

const Headerr = () => {
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
                        <NavLink to="/about">
                            about
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
                        <NavLink to="/blog">
                            blog
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <button>contact</button>
        </div>
    </header>
  )
}

export default Headerr