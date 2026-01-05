import {NavLink} from 'react-router-dom';
import './Navigation.css'

function Navigation() {
    return (
        <>
            <nav className="navbar-base">
                <h1>Boekify</h1>
                <ul className="navbar-list">
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? 'nav-active' : 'nav-default'}>
                            Home
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;