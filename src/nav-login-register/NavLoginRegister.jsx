import './NavLoginRegister.css';
import React, { useContext } from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext.jsx';

function NavLoginRegister() {
    const isActive = true;

    const navigate = useNavigate();

    const {isAuth} = useContext(AuthContext);
    console.log({isAuth});

    return (
        <>
            <nav className="nav-container-login-register">
                {
                    !isAuth ?
                        <>
                            <NavLink
                                to="/login"
                                className={({isActive}) => isActive ? 'active-nav-link-register' : 'default-nav-link-register'}>
                                Login
                            </NavLink>
                            <NavLink
                                to="/registreer"
                                className={({isActive}) => isActive ? 'active-nav-link-register' : 'default-nav-link-register'}>
                                Registreer
                            </NavLink>
                        </> :
                        <NavLink
                            to="/">
                            Uitloggen
                        </NavLink>
                }
            </nav>
        </>
    )
}

export default NavLoginRegister;