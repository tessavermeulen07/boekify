import React, { createContext, useState } from 'react';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import Home from '../pages/home/Home.jsx';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {

    const [isAuth, toggleIsAuth] = useState(false);

    const navigate = useNavigate();

    function login() {
        console.log('Context login wordt nu aangeroepen');
        toggleIsAuth(true);
        console.log('Gebruiker is ingelogd');
        navigate('/home');
    }

    const data = {
        isAuth: isAuth,
        login: login
    }

    if (isAuth) {
        console.log ('ingelogd - test 1');
    } else {
        console.log('uitgelogd - test 2')
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthContextProvider;