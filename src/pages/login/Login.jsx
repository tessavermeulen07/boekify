import './Login.css';
import React, { useState, useContext, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from '../../components/button-nav-start/ButtonNavStart.jsx';
import TextLabel from '../../components/textLabel/TextLabel.jsx';
import NavLoginRegister from '../../nav-login-register/NavLoginRegister.jsx';
import { AuthContext } from '../../context/AuthContext.jsx';
import axios from 'axios';


function Login () {

    const { login } = useContext(AuthContext);

    const isActive = true;
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);

    console.log({login});


    async  function handleSubmit(e) {
        e.preventDefault();
        console.log(emailValue, passwordValue);
        try {
            toggleLoading(true);

            toggleError(false);

            const response = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/login', {
                email: emailValue,
                password: passwordValue
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            })
            console.log(response);
            login(response.data.token);

        } catch (error) {
            console.error(error);
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }


    return (
        <>
            <div className='main-container-login'>
                <NavLoginRegister />
                <form
                    onSubmit={handleSubmit}
                    className="container-form-login">
                    <TextLabel
                        labelHTML="email"
                        startTextLabel="E-mail"
                        typeOfLabel="email"
                        idOfLabel="email"
                        nameOfLabel="email"
                        valueOfLabel={emailValue}
                        onChangeOfLabel={(e) => setEmailValue(e.target.value)}
                    />
                    <TextLabel
                        labelHTML="password"
                        startTextLabel="Paswoord"
                        typeOfLabel="password"
                        idOfLabel="password"
                        nameOfLabel="password"
                        valueOfLabel={passwordValue}
                        onChangeOfLabel={(e) => setPasswordValue(e.target.value)}
                    />
                    <Button
                        typeOfButton="submit"
                        valueOfButton="send"
                        nameOfButton="send"
                        textOnButton="Login"
                    />
                </form>
            </div>
        </>
    )
}

export default Login;