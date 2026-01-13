import './Start.css';
import NavStart from '../../nav-start/NavStart.jsx';
import boekify from '../../assets/boekify-afbeelding.jpg';
import search from '../../assets/icons/search.svg';
import bookmark from '../../assets/icons/bookmark.svg';
import add from '../../assets/icons/add.svg';


function Start() {

    return (
        <>
            <NavStart/>
            <section className="main-container">
                <img src={boekify} alt="Afbeelding van een open boek"/>
                <div className="title">
                    <h2>Welkom bij Boekify - </h2>
                    <h2>Waar jouw boekenverzameling begint</h2>
                    <h4>Voor lezers die hun boeken koesteren</h4>
                </div>
            </section>
            <div className="container-articles">
                <article className="article-box-start">
                    <span className="span-box">
                        <h3>Zoek</h3>
                        <img src={search} alt="Icon magnifying glass" className="icon"/>
                    </span>
                    <p>Zoek in de database naar boeken om ze toe te voegen aan je eigen account.</p>
                </article>
                <article className="article-box-start">
                    <span className="span-box">
                        <h3>Track</h3>
                        <img src={bookmark} alt="Bookmark icon" className="icon"/>
                    </span>
                    <p>Houd bij welke boeken je in je bezit hebt, maar ook welke boeken je hebt gelezen.</p>
                </article>
                <article className="article-box-start">
                    <span className="span-box">
                        <h3>Add</h3>
                        <img src={add} alt="Add icon" className="icon"/>
                    </span>
                        <p>Staat een boek niet in de database, voeg het dan toe aan je account.</p>
                </article>
            </div>
        </>
    )
}

export default Start;