import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import './Navigation.css';
import ButtonSmall from '../components/button-small/ButtonSmall.jsx';
import profile from '../assets/icons/profile.svg';
import {AuthContext} from '../context/AuthContext.jsx';

function Navigation() {
    const navigate = useNavigate();
    const {isAuth, logout} = useContext(AuthContext);

    return (
        <>
            <nav className="navbar-base">
                <h1>Boekify</h1>
                <ul className="navbar-list">
                    <li>
                        <NavLink to="/home" className={({isActive}) => isActive ? 'nav-active' : 'nav-default'}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/library" className={({isActive}) => isActive ? 'nav-active' : 'nav-default'}>
                            Bibliotheek
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile" className={({isActive}) => isActive ? 'nav-active' : 'nav-default'}>
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <ButtonSmall
                            textOnButton="LOGOUT"
                            typeOfButton="button"
                            onClickOfButton={logout}
                        />
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;