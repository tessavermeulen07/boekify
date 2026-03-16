import React, { createContext, useState } from 'react';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import Home from '../pages/home/Home.jsx';
import axios, {isAxiosError} from 'axios';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {

    const [isAuth, toggleIsAuth] = useState(
        {
            isAuth: false,
            user: null
        }
    );
    const navigate = useNavigate();

    function login() {
        console.log('Context login wordt nu aangeroepen');
        toggleIsAuth({isAuth: true, user: ''});
        console.log('Gebruiker is ingelogd');
        navigate('/home');


    }

    function logout() {
        toggleIsAuth({isAuth: false, user: ''});
        console.log("gebruiker is uitgelogd");
        navigate('/');
    }

    const data = {
        isAuth: isAuth,
        login: login,
        logout: logout
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