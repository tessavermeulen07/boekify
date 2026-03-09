import './Login.css';
import React, {useState, useContext, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import Button from '../../components/button-nav-start/ButtonNavStart.jsx';
import TextLabel from '../../components/textLabel/TextLabel.jsx';
import NavLoginRegister from '../../nav-login-register/NavLoginRegister.jsx';


function Login () {

const isActive = true;
const [emailValue, setEmailValue] = useState('');
const [passwordValue, setPasswordValue] = useState('');




    return (
        <>
            <div className='main-container-login'>
                <NavLoginRegister />
                <form
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
                        nameOfButton="login"
                        textOnButton="Login"
                    />
                </form>
            </div>
        </>
    )
}

export default Login;