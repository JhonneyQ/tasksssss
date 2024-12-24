import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"

const HeaderA = () => {
  return (
    <header>
        <div className='container'>
            <h2>Logo</h2>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/admin">
                            dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/edit">
                            edit
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/add">
                            add
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <button>contact</button>
        </div>
    </header>
  )
}

export default HeaderA