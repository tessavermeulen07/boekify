import './NavLoginRegister.css';
import React, {useContext} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext.jsx';

function NavLoginRegister() {
    const isActive = true;

    const navigate = useNavigate();

    return (
        <>
            <nav className="nav-container-login-register">
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
                </>
            </nav>
        </>
    )
}

export default NavLoginRegister;