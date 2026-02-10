import './Home.css';
import Navigation from '../../navigation/Navigation.jsx';
import CurrentBook from '../../components/currentBook/CurrentBook.jsx';
import Block from '../../components/block/Block.jsx';

function Home() {
    return (
        <>
            <Navigation/>
            <div className="outer-container">
                <section>
                    <CurrentBook/>
                </section>
                <section>
                    <Block>
                        Random Quote
                    </Block>
                    <Block>Reading Stats</Block>
                    <Block>Reading Goals</Block>
                </section>
            </div>
        </>
    )
}

export default Home;