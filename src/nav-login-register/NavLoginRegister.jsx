import './NavLoginRegister.css';
import React from 'react';
import {NavLink} from 'react-router-dom';

function NavLoginRegister() {
    const isActive = true;

    return (
        <>
            <nav className="nav-container-login-register">
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
            </nav>
        </>
    )
}

export default NavLoginRegister;