import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">home</Link>
                            
                        </li>
                        <li>
                            <Link to="/products">products</Link>
                            
                        </li>
                        <li>
                            <Link to="/favorites">favorites</Link>
                            
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header