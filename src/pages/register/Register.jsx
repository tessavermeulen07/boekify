import './Register.css';
import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import Button from '../../components/button-nav-start/ButtonNavStart.jsx';
import books from '../../assets/stapelboeken.jpg';

function Register() {

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [checkboxAgreedValue, toggleCheckboxAgreedValue] = useState(false);

    const isActive = true

    return (
        <>
            <div className='main-container-register'>
                <nav className="nav-container-register">
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
                <div className="container-image-text-register">
                    <img src={books} alt="Stack of Books" className="img-books"/>
                    <div className="container-text-register">
                        <div className="join-title-register">Join Boekify</div>
                        <div>Word lid en start je eigen thuisbibliotheek</div>
                    </div>
                </div>
                <form>
                    <label htmlFor="username">
                        <p>Gebruikersnaam:</p>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)}
                        />
                    </label>
                    <label htmlFor="email">
                        <p>Email:</p>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={emailValue}
                            onChange={(e) => setEmailValue(e.target.value)}
                        />
                    </label>
                    <label htmlFor="password">
                        <p>Paswoord:</p>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={passwordValue}
                            onChange={(e) => setPasswordValue(e.target.value)}
                        />
                    </label>
                    <label htmlFor="checkbox">
                        <input
                            type="checkbox"
                            id="agreedConditions"
                            name="agreedConditions"
                            value={checkboxAgreedValue}
                            onChange={() => toggleCheckboxAgreedValue(!checkboxAgreedValue)}
                        />
                        Ik ga akkoord met de voorwaarden en privacy policy van Boekify.
                    </label>
                    <Button
                        typeOfButton="submit"
                        valueOfButton="send"
                        nameOfButton="send"
                        textOnButton="Registreer"
                    />
                </form>
            </div>

        </>
    )
}

export default Register;