import React, { createContext, useState, useEffect } from 'react';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios, { isAxiosError } from 'axios';
import Home from '../pages/home/Home.jsx';
import isTokenValid from '../helpers/isTokenValid.js';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {

    const [isAuth, toggleIsAuth] = useState(
        {
            isAuth: false,
            user: null,
            status: 'pending'
        }
    );

    const navigate = useNavigate();


    useEffect(() => {
        const token = localStorage.getItem('JWT');
        console.log(token);
        if (token) {
            const tokenId = jwtDecode(token);
            console.log(tokenId)
            if (isTokenValid(tokenId)) {
                void getProfile(tokenId.userId);
            } else {
                toggleIsAuth({
                    isAuth: false,
                    status: 'done',
                    user: null
                });
            }
        }else toggleIsAuth({
            isAuth: false,
            status: 'done',
            user: null
        });
    }, []);


    async function getProfile(id) {
        const token = localStorage.getItem('JWT');
        console.log(token);
        try {
            const response = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/users/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            console.log(response);
            toggleIsAuth({
                isAuth: true,
                status: 'done',
                user: response.data
            });
        } catch (error) {
            console.error(error);
        }
    }


    function login(token) {

        toggleIsAuth({isAuth: true, user: '', status: 'done'});

        localStorage.setItem('JWT', token);
        const tokenId = jwtDecode(token);

        toggleIsAuth({ isAuth: true, user: null, status: 'done' })

        console.log(tokenId);
        void getProfile(tokenId.userId);
        navigate('/home');
    }


    function logout() {
        toggleIsAuth({isAuth: false, user: '', status: 'done'});

        localStorage.removeItem('JWT');

        navigate('/');
    }


    const data = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        status: isAuth.status,
        login: login,
        logout: logout
    }

    if (isAuth.status === 'pending') {
        return <p>Laden...</p>
    }


    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthContextProvider;