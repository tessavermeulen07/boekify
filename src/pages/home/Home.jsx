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
                    <CurrentBook />
                </section>
                <section className="block-home">
                    <Block
                        title="Random Quote"
                        content="Hier komt ooit een random quote."
                        blockTextButton="Quotes"
                    />
                    <Block
                        title="Reading Stats"
                        content="Hier komen ooit de reading stats."
                        blockTextButton="Stats"
                    />
                    <Block
                        title="Reading Goals"
                        content="Hier komen ooit reading goals te staan."
                        blockTextButton="Goals"
                    />
                </section>
            </div>
        </>
    )
}

export default Home;