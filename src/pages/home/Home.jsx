import './Home.css';
import Navigation from '../../navigation/Navigation.jsx';
import CurrentBook from '../../components/currentBook/CurrentBook.jsx';
import Block from '../../components/block/Block.jsx';
import {useEffect, useState} from 'react';
import axios from 'axios';

function Home() {
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const [books, setBooks] = useState(null);
    const [libraryAll, setLibraryAll] = useState(null);


    async function getReadBooks() {
        try {

            toggleLoading(true);

            toggleError(false);

            const resultBooksRead = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/members/1/readList
`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setBooks(resultBooksRead.data);
            console.log(resultBooksRead.data);
        } catch (error) {
            console.error(error);
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }

    useEffect(() => {
        void getReadBooks();
    }, []);


    async function getLibrary() {
        try {
            toggleLoading(true);

            toggleError(false);

            const resultLibraryAll = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/books', {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });

            setLibraryAll(resultLibraryAll.data);
            console.log(resultLibraryAll.data);

        } catch (error) {
            console.error(error);
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }

    useEffect(() => {
        void getLibrary();
    }, []);


    return (
        <>
            <Navigation/>
            <div className="outer-container">
                <section>
                    <CurrentBook/>
                </section>
                <section className="block-home">
                    <Block
                        title="Gelezen Boeken"
                        content={
                            <ul className="list-books-read-home">
                                {books && books?.map((booksRead) => {
                                    const readBook = libraryAll?.find((b) => b.id === booksRead.bookId);
                                    return (
                                        <li key={booksRead.bookId}>
                                            {readBook &&
                                                <>
                                            <img src={readBook.coverImage} alt={readBook.alt} className="img-home"/>
                                            </>
                                    }
                                        </li>
                                    )}
                                )}
                            </ul>
                        }

                        blockTextButton="Alle"
                    />
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