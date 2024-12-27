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
                        <NavLink to="/favorite">
                            favorite
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/products">
                            products
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <button>contact</button>
        </div>
    </header>
  )
}

export default Header