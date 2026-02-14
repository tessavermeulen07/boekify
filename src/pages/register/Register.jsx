import './Register.css';
import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import Button from '../../components/button-nav-start/ButtonNavStart.jsx';
import TextLabel from '../../components/textLabel/TextLabel.jsx';
import NavLoginRegister from '../../nav-login-register/NavLoginRegister.jsx';
import books from '../../assets/stapelboeken.jpg';


function Register() {

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [checkboxAgreedValue, toggleCheckboxAgreedValue] = useState(false);

    const isActive = true;

    return (
        <>
            <div className='main-container-register'>
               <NavLoginRegister />

                <div className="container-image-text-register">
                    <img src={books} alt="Stack of Books" className="img-books"/>
                    <div className="container-text-register">
                        <div className="join-title-register">Join Boekify</div>
                        <div>Word lid en start je eigen thuisbibliotheek</div>
                    </div>
                </div>
                <form className="container-form-register">
                    <TextLabel
                        labelHtml="name"
                        startTextLabel="Naam"
                        typeOfLabel="text"
                        idOfLabel="name"
                        nameOfLabel="name"
                        valueOfLabel={nameValue}
                        onChangeOfLabel={(e) => setNameValue(e.target.value)}
                    />
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

                    <label htmlFor="checkbox" className="checkbox-register">
                        <input className="checkbox-register-square"
                            type="checkbox"
                            id="agreedConditions"
                            name="agreedConditions"
                            checked={checkboxAgreedValue}
                            onChange={() => toggleCheckboxAgreedValue(!checkboxAgreedValue)}
                        /> Ik ga akkoord met de voorwaarden en privacy policy van Boekify.
                    </label>
                    <Button
                        typeOfButton="submit"
                        valueOfButton="send"
                        nameOfButton="registreer"
                        textOnButton="Registreer"
                    />
                </form>
            </div>

        </>
    )
}

export default Register;