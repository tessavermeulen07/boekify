import './NavStart.css';
import Button from "../components/button/Button.jsx";
import {useNavigate} from "react-router-dom";


function NavStart() {

    let navigate = useNavigate();

    return (
        <>
            <nav className="navbar-base">
                <h1 className="title">Boekify</h1>
                <div className="navbar-list">
                    <Button
                        typeOfButton="submit"
                        valueOfButton="send"
                        nameOfButton="send"
                        onClickOfButton={() => navigate('/')}
                        textOnButton="Registreer"
                    />

                    <Button
                        typeOfButton="submit"
                        valueOfButton="send"
                        nameOfButton="send"
                        onClickOfButton={() => navigate('/')}
                        textOnButton="Login"
                    /></div>


            </nav>
        </>
    )
}

export default NavStart;