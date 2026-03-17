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

    function login(token) {

        toggleIsAuth({isAuth: true, user: ''});

        navigate('/home');

        localStorage.setItem('JWT', token);
        const tokenId = jwtDecode(token);
        console.log(tokenId.memberId);
        getProfile(tokenId.memberId)
    }

    async function getProfile() {
        const token = localStorage.getItem('JWT');
        console.log(token);
        try {
            const response = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/members/1`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    function logout() {
        toggleIsAuth({isAuth: false, user: ''});

        navigate('/');
    }

    const data = {
        isAuth: isAuth,
        login: login,
        logout: logout
    }


    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthContextProvider;