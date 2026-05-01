import './Register.css';
import React, {useState} from 'react';
import {NavLink, Link, Navigate} from 'react-router-dom';
import Button from '../../components/button-nav-start/ButtonNavStart.jsx';
import TextLabel from '../../components/textLabel/TextLabel.jsx';
import NavLoginRegister from '../../nav-login-register/NavLoginRegister.jsx';
import books from '../../assets/stapelboeken.jpg';
import axios from 'axios';


function Register() {

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [checkboxAgreedValue, toggleCheckboxAgreedValue] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const [newUserId, setNewUserId] = useState(null);
    const [success, setSuccess] = useState(false);
    const [membershipActive, setMembershipActive] = useState(true);

    const isActive = true;

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            toggleLoading(true);

            toggleError(false);

            const register = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/users', {
                "email": emailValue,
                "password": passwordValue,
                "name": nameValue,
                "membershipActive": membershipActive,
                "role": "member"
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            console.log(register);
            setSuccess(true);
        } catch (error) {
            console.log('registreren niet gelukt');
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }

    return (
        <>
            <div className='main-container-register'>
                <NavLoginRegister/>

                {success === true ? (
                        <p className="container-image-text-register">Registratie gelukt. Je kunt nu inloggen.</p>
                    ) : (
                        <>
                            <div className="container-image-text-register">
                                <img src={books} alt="Stack of Books" className="img-books"/>
                                <div className="container-text-register">
                                    <div className="join-title-register">Join Boekify</div>
                                    <div>Word lid en start je eigen thuisbibliotheek</div>
                                </div>
                            </div>
                            <form className="container-form-register" onSubmit={handleSubmit}>
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
                                    nameOfButton="send"
                                    textOnButton="Registreer"
                                />
                            </form>
                        </>
                    )
                }
            </div>

        </>
    )
}

export default Register;