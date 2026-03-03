import {NavLink} from 'react-router-dom';
import './Navigation.css';
import profile from '../assets/icons/profile.svg';

function Navigation() {
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
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;