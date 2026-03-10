import './NavStart.css';
import ButtonNavStart from '../components/button-nav-start/ButtonNavStart.jsx'
import { useNavigate } from "react-router-dom";


function NavStart() {

    let navigate = useNavigate();



    return (
        <>
            <nav className="navbar-base">
                <h1 className="title">Boekify</h1>
                <div className="navbar-list">
                    <ButtonNavStart
                        typeOfButton="submit"
                        valueOfButton="send"
                        nameOfButton="send"
                        onClickOfButton={() => navigate('/registreer')}
                        textOnButton="Registreer"
                        heightOfButton="40"
                        widthOfButton="200"

                    />

                    <ButtonNavStart
                        typeOfButton="submit"
                        valueOfButton="send"
                        nameOfButton="send"
                        onClickOfButton={() => navigate('/login')}
                        textOnButton="Login"
                    />
                </div>


            </nav>
        </>
    )
}

export default NavStart;