import './NavStart.css';
import Button from "../components/button/Button.jsx";


function NavStart() {

    return (
        <>
            <nav className="navbar-base">
                <h1>Boekify</h1>

                <ul className="navbar-list">
                    <li>
                      <Button/>
                    </li>
                    <li>
                       <Button/>
                    </li>
                </ul>

            </nav>
        </>
    )
}

export default NavStart;