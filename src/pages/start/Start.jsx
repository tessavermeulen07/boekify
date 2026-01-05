import "./Start.css";
import NavStart from "../../nav-start/NavStart.jsx";
import boekify from "../../assets/boekify-afbeelding.jpg";
import 


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
            <div className="container-articles">
                <article className="article-box">
                    <h3>Find</h3>
                    <p>dfhdfhjs</p>
                </article>
                <article className="article-box">
                    <h3>Track</h3>
                    <p>dfhdfhjs</p>
                </article>
                <article className="article-box">
                    <h3>Add</h3>
                    
                    <p>dfhdfhjs</p>
                </article>
            </div>
        </>
    )
}

export default Start;