import React, {createContext, useState} from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export const AuthContext = createContext ({});

function AuthContextProvider() {

    const [isAuth, toggleIsAuth] = useState(
        {
            isAuth: false,
            user: null,
            status: 'pending'
        }
    );

    const navigate = useNavigate();

    async function getProfile(id) {
        try {
            const response = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/members/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            toggleIsAuth({
                isAuth: true,
                status: 'done',
                user: response.data
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    function login() {
        toggleIsAuth({
            isAuth: true,
            status: 'done',
        });
        console.log(ingelogd - response.data);
    }

    function logout() {
        toggleIsAuth({
            isAuth: false,
            status: 'done',
            user: null
        });
        console.log(uitgelogd)
    }

    const data = {
        isAuth: isAuth,
        user: isAuth.user,
        status: isAuth.status,
        login: login,
        logout: logout
    }

    return (

        <AuthContext.Provider value={data}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>

    )
}

export default AuthContextProvider;