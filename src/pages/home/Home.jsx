import './Home.css';
import Navigation from '../../navigation/Navigation.jsx';
import CurrentBook from '../../components/currentBook/CurrentBook.jsx';

function Home() {
    return (
        <>
            <Navigation/>
            <div className="outer-container">
                <section>
                    <CurrentBook/>
                </section>
                <section>
                    <p>fdhjfdhjfhd</p>
                </section>
            </div>
        </>
    )
}

export default Home;