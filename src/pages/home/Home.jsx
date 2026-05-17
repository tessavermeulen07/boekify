import './Home.css';
import Navigation from '../../navigation/Navigation.jsx';
import CurrentBook from '../../components/currentBook/CurrentBook.jsx';
import Block from '../../components/block/Block.jsx';
import {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from '../../context/AuthContext.jsx';

function Home() {
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const [books, setBooks] = useState(null);
    const [bookItems, setBookItems] = useState(null);
    const [libraryAll, setLibraryAll] = useState(null);
    const {isAuth, user} = useContext(AuthContext);


    async function getReadBooks() {
        try {

            toggleLoading(true);

            toggleError(false);

            const resultBooksRead = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/users/${user.id}/readList`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setBooks(resultBooksRead.data);

            if (resultBooksRead.data && resultBooksRead.data.length > 0) {
                const listId = resultBooksRead.data[0].id;
                void getReadBooksItems(listId)
            }

        } catch (error) {
            console.error(error);
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }

    useEffect(() => {
        if (isAuth && user && user.id !== undefined) {
            void getReadBooks();
        }
    }, [isAuth, user]);

    async function getReadBooksItems(id) {
        try {
            toggleLoading(true);
            toggleError(false);

            const resultReadBooksItems = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/readList/${id}/readListItem`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setBookItems(resultReadBooksItems.data);
        } catch (error) {
            console.error("Read Book Items niet gevonden", error);
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }


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
                                {bookItems && bookItems.length > 0 && libraryAll && bookItems?.map((booksRead, index) => {
                                        const uniqueKey = booksRead.id || booksRead.bookId || index
                                        const readBook = libraryAll?.find((b) => b.id == booksRead.bookId);

                                        return (
                                            <li key={uniqueKey}>
                                                {readBook &&
                                                    <>
                                                        <div className="read-book-block-home">
                                                            <img src={readBook.coverImage} alt={readBook.alt}
                                                                 className="img-home"/>
                                                            {readBook.title}
                                                        </div>
                                                    </>
                                                }
                                            </li>
                                        )
                                    }
                                )}
                            </ul>
                        }

                        blockTextButton="Alle"
                    />
                    {/*TODO Dit wordt in een later stadium toegevoegd*/}
                    {/*<Block*/}
                    {/*    title="Random Quote"*/}
                    {/*    content="Hier komt ooit een random quote."*/}
                    {/*    blockTextButton="Quotes"*/}
                    {/*/>*/}
                    {/*<Block*/}
                    {/*    title="Reading Stats"*/}
                    {/*    content="Hier komen ooit de reading stats."*/}
                    {/*    blockTextButton="Stats"*/}
                    {/*/>*/}
                    {/*<Block*/}
                    {/*    title="Reading Goals"*/}
                    {/*    content="Hier komen ooit reading goals te staan."*/}
                    {/*    blockTextButton="Goals"*/}
                    {/*/>*/}
                </section>
            </div>
        </>
    )
}

export default Home;