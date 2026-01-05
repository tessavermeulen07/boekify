import "./Start.css";
import NavStart from "../../nav-start/NavStart.jsx";
import boekify from "../../assets/boekify-afbeelding.jpg";


function Start() {

    return (
        <>
            <NavStart/>
            <section className="main-container">
                <img src={boekify} alt="Afbeelding van een open boek" />
                <div className="title">
                    <h2>Welkom bij Boekify - </h2>
                    <h2>Waar jouw boekenverhaal begint</h2>
                    <h4>Voor lezers die hun boeken koesteren</h4>
                </div>
            </section>

        </>
    )
}

export default Start;