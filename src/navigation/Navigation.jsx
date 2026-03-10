import { NavLink, useNavigation } from 'react-router-dom';
import { useContext } from 'react'
import './Navigation.css';
import profile from '../assets/icons/profile.svg';
import {AuthContext} from '../context/AuthContext.jsx';

function Navigation() {

    const {isAuth} = useContext(AuthContext);
    console.log({isAuth});

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
                    {/*<li>*/}
                    {/*    <NavLink to="/" className={({isActive}) => isActive ? 'nav-active' : 'nav-default'}>*/}
                    {/*        Statistieken*/}
                    {/*    </NavLink>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <NavLink to="/" className={({isActive}) => isActive ? 'nav-active' : 'nav-default'}>*/}
                    {/*        Quotes*/}
                    {/*    </NavLink>*/}
                    {/*</li>*/}
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? 'nav-active' : 'nav-default'}>
                            Profile
                        </NavLink>
                        <NavLink to="/" className={({isActive}) => isActive ? 'nav-active' : 'nav-default'}>
                            Uitloggen
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;